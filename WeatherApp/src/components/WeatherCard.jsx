import React, { useEffect, useState } from 'react'
import humidity from '/humidity.png'
import sunWithCloud from '/sunCloude.png'
import wind from '/wind.png'
import rain from '/rain.png'
import winter from '/winter.png'
import summer from '/summer.png'

const WeatherCard = ({weather}) => {
    const [date,setDate] = useState(new Date());
    const [weatherImg, setWeatherImg] = useState();
    useEffect(() => {
  const interval = setInterval(() => {
    setDate(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);
    useEffect(() => {
        let img = sunWithCloud;

        if (weather) {
            const desc = weather.desc.toLowerCase();

            if (desc.includes("rain")) {
                img = rain;
            } else if (desc.includes("snow")) {
                img = winter;
            }
            else if (desc.includes("cold")) {
                img = winter;
            } else if (desc.includes("clear")) {
                img = summer;
            } else if (desc.includes("cloud")) {
                img = sunWithCloud;
            }
        }

        setWeatherImg(img);
    }, [weather]);
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minutes: "2-digit",
        hour12: true
    });

    if (!weather) {
        return null;
    }

  return (
    <div className='text-center w-90 p-6 text-white bg-gradient-to-t from-violet-600 via-violet-700 to-violet-800 rounded-xl'>
        <h2 className='text-2xl font-medium capitalize'>{weather.city}</h2>
        <p className='text-sm mt-1'>{date.toLocaleDateString("en-US", {
            weekday: "long"
        })}{"  "}{formattedTime}</p>
        <div className='flex justify-center items-center pt-2'>
            <img src={weatherImg || sunWithCloud} alt={weather?.desc || 'weather icon'} className='w-30 h-30 '/>
        </div>
        <h1 className='text-4xl font-medium mt-2'>{Math.round(weather.temp)}°C</h1>
        <p className='text-md capitalize mt-1'>{weather.desc}</p>
        <div className='grid grid-cols-2 gap-5 items-center mt-5 justify-center'>
            <div className=' bg-black/15 p-3 flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg shadow-violet-300'>
                <div>
                    <img src={humidity} alt="" className='w-10 h-15'/>
                </div>
                <div>
                    <p className='text-lg font-semibold'>Humidity</p>
                    <p className='text-md'>{weather.humidity} %</p>
                </div>
            </div>
            <div className='bg-black/15 p-3 flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg shadow-violet-300'>
                <div>
                    <img src={wind} alt="" className='w-15 h-15'/>
                </div>
                <div>
                    <p className='text-lg font-semibold'>Wind speed</p>
                    <p className='text-md'>{weather.wind} km/h</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeatherCard
