import axios from 'axios';


const API_KEY = '5f21e25c90e44e60859135245211809'

const getCityWeather =  async (city_name) =>{
    const  response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=2&aqi=no&alerts=no`)
    // console.log(response)
    return response
    
}

export default getCityWeather
