import './Weather.css'
import search_icon from '../components/assets/search.png'
import clear_icon from '../components/assets/clear.png'
import cloud_icon from '../components/assets/cloud.png'
import drizzle_icon from '../components/assets/drizzle.png'
import humid_icon from '../components/assets/humidity.png'
import rain_icon from '../components/assets/rain.png'
import snow_icon from '../components/assets/snow.png'
import wind_icon from '../components/assets/wind.png'

const Weather = () => {
    return (
       <>
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search...'/>
                <div className='search-icon'>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='weather-img'>
                <img src={cloud_icon} alt="" />
            </div>
            <div className='weather-tmp'>10<sup>o</sup>C</div>
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