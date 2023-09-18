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
                <div className='search-icon'></div>
            </div>
        </div>
       </>
    );
};

export default Weather;