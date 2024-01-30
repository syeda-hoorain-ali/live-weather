import React from "react";

const WeatherCard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = React.useState("");
    const [time, setTime] = React.useState("");

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    React.useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;

                case "Haze":
                    setWeatherState("wi-day-fog");
                    break;

                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;

                case "Mist":
                    setWeatherState("wi-dust");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood])


    // converting secs into to mins
    let date = new Date(sunset * 1000);
    let sunsetTime = `${date.getHours()} : ${date.getMinutes()}`

    // refresh time after 1 second
    setInterval(() => {
        setTime(time + 1);
    }, 1000);



    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weatherMood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>

                <div className="date"> {new Date().toLocaleString()} </div>

                {/* 4 col section */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"} ></i></p>
                            <p className="extra-info-left-side">
                                {sunsetTime} <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"} ></i></p>
                            <p className="extra-info-left-side">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"} ></i></p>
                            <p className="extra-info-left-side">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"} ></i></p>
                            <p className="extra-info-left-side">
                                {speed} <br />
                                Speed
                            </p>
                        </div>

                    </div>

                </div>

            </article>
        </>
    )
}


export default WeatherCard;

