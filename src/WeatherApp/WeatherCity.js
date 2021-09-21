import React from 'react'
import WeatherCarousel from './components/WeatherCarousel'
import SearchContainer from './components/SearchComponent'

const WeatherCity = () => {
    
    return (
        <>
            <WeatherCarousel />      
            <SearchContainer />
            {/* <button onClick={fetchWeather}>Fetch</button> */}
        </>
    )
}

export default WeatherCity
