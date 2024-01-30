import React, { useEffect, useState } from "react"
import './style.css'
import WeatherCard from "./WeatherCard";


const Temp = () => {

    const [searchValue, setSearchValue] = React.useState("karachi");
    const [tempInfo, setTempInfo] = React.useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5308371542a8e541af922b46adf880c5`;


            let res = await fetch(url);
            let data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            console.log(weatherMood);

            const weatherInfoData =  {
                temp, 
                humidity, 
                pressure, 
                weatherMood, 
                name, 
                speed, 
                country, 
                sunset
            };
            
            setTempInfo(weatherInfoData)
    
        } catch (error) {
            console.log(error);
        }
    
    
    };

    React.useEffect(() => {
        getWeatherInfo();
    }, []);




    return (<>
        <div className="wrap">
            <div className="search">
                <input type="search" 
                    placeholder="Search"
                    autoFocus id="search" 
                    className="searchTerm"
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)} 
                />

                <button className="searchButton" type="button" 
                    onClick={getWeatherInfo}> Search
                </button>

            </div>
        </div>

        {/* temp card */}
        <WeatherCard tempInfo={tempInfo} />

    </>)
}



export default Temp;