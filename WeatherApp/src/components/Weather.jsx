import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox';
import WeatherCard from './WeatherCard';
const WeatherAPI = import.meta.env.VITE_API_KEY;

const Weather = () => {

    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState([]);
    const fetchweather = async (city) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WeatherAPI}&units=metric`)
            const data = res.data
            const today = data.list[0]
            console.log(data)

            setWeather({
                city: data.city.name,
                temp: today.main.temp,
                desc: today.weather[0].description,
                humidity: today.main.humidity,
                wind: today.wind.speed
            })

            const daily = data.list.filter((item) => item.dt_txt.includes("12:00:00")).map((day) => ({
                date: new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
                temp: Math.round(day.main.temp),
                desc: day.weather[0].description,
                icon: day.weather[0].icon,
            }));
            setForecast(daily);
            console.log(daily)

        }
        catch (err) {
            alert("City not found!");
        }
    }
    return (
        <div className='flex flex-col items-center md:px-5 py-10'>
            <div>
                <h1 className='text-purple-800 text-center font-extrabold text-4xl'>Weather Forcast</h1>
                <SearchBox onSearch={fetchweather} />
            </div>
            <div className='mt-8'>
                <WeatherCard weather={weather} />
            </div>
            {/*  Forecast Card  */}
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-5 mt-6 flex-wrap justify-center">
                {forecast.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-t from-purple-700 via-violet-600 to-violet-700 text-white p-4 rounded-lg text-center sm:w-40 w-42"
                    >
                        <p className="text-xl font-semibold">{item.date}</p>

                        <img
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt={item.desc}
                            className="mx-auto"
                        />

                        <p className="text-xl">{item.temp}°C</p>

                        <p className="capitalize text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Weather
