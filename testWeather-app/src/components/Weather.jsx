import './Weather.css'
import React, { useEffect, useRef, useState } from 'react'
import search_icon from '../components/assets/search.png'
import clear_icon from '../components/assets/clear.png'
import cloud_icon from '../components/assets/cloud.png'
import drizzle_icon from '../components/assets/drizzle.png'
import humid_icon from '../components/assets/humidity.png'
import rain_icon from '../components/assets/rain.png'
import snow_icon from '../components/assets/snow.png'
import wind_icon from '../components/assets/wind.png'

const Weather = () => {

    let api_key = "1017b0d8ddc253536421c752d8f3bd1b";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async() => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidnity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("weather-tmp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }


    }

    useEffect(() => {

        function getEnterKey(e){
            if(e.key === 'Enter'){
                search()
            }
        }

        document.addEventListener("keypress", getEnterKey)

        return () => {
            document.removeEventListener("keypress", getEnterKey)
        }
    }, [])


    return (
       <>
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search...'/>
                <div className='search-icon' onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='weather-img'>
                <img src={wicon} alt="" />
            </div>
            <div className='weather-tmp'>10<sup>o</sup>c</div>
            <div className='weather-location'>Phnom Penh</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humid_icon} alt="" />
                    <div className='data'>
                        <div className='humidnity-percent'>64%</div>
                        <div className='text'>Humidnity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt="" />
                    <div className='data'>
                        <div className='wind-speed'>18 km/h</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Weather;