import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import search_location from '../assets/search_location.svg'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import WeatherCard from './WeatherCard'
import axios from 'axios'
import ls from 'localstorage-slim'

const SearchContainer = styled.div`
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .img-container {
        /* border: 1px solid red; */
        
        & img {
            width: 500px;
            height: 700px;
        }
    }

    .search-wrapper {
        /* border: 1px solid green; */
        position: relative;
        top: 0;
        right: -55;
        width: 100%;
        /* height: 700px; */
        
    }

    @media only screen and (max-width: 1000px){
        margin-top: 15rem;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: space-between;
        flex-direction: column;

        .img-container {
            /* border: 1px solid red; */
            /* height: 30%; */
            /* margin: 0 auto; */

            & img {
                width: 250px;
                height: 200px;
            }
        }

        .search-wrapper {
            height: 60%;
            /* border: 1px solid green; */
            position: relative;
            top: 0;
            right: 0;
            width: 100%;
            /* height: 700px; */
            
        }
    }
`

const SaerchComponent = () => {
    const [ cityWeather, setCityWeather ] = useState()
    const queryExecuted = {
        status: false,
        city: 'Mumbai',
        ttl: new Date().getTime()
    }
    
    const local = ls.get('queryStatus')
    const defaultCity = local !== null ? local.city : queryExecuted.city
    const [cityName, setCityName ]= useState(defaultCity)
    const [searched, setSearched ] = useState(local.status ?? false)
    const defaultWeather = useRef(true)

    // eslint-disable-next-line
    useEffect(() => {
        if(local === null){
            ls.set('queryStatus', queryExecuted)    
        } else {
            const now = new Date()
            if (now.getTime() - local.ttl === 3600000){
                ls.set('queryStatus', {...queryExecuted, status: false, ttl: 600})
                setSearched(false)
            }
        }

        if (defaultWeather.current){
            fetchWeather()
        }

        return () => {
            defaultWeather.current = false
        }

    })
    
    // console.log('weather', cityWeather)
    
    const fetchWeather = () => {
        if(!defaultWeather.current) {
            ls.set('queryStatus', {...queryExecuted, status: true, city: cityName, ttl: new Date().getTime()})
            setSearched(true)
        }

        const API_KEY = '5f21e25c90e44e60859135245211809' //weather api key
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=no&alerts=no`)
        .then(response => setCityWeather(response.data))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setCityName(e.target.value)
    }

    

    return (
        <SearchContainer id='search-container'>
            
            <div className="img-container">
                <img
                className="d-block"
                src={search_location}
                alt="First slide"
                />
            </div>
            <div className="search-wrapper">
                <InputGroup className="mt-2 mb-2" size="sm">
                    { searched ?
                        <>
                            <FormControl
                                placeholder="You can search after 1 hour."
                                aria-label="City Name"
                                aria-describedby="basic-addon2"
                                onChange={handleChange}
                                readOnly
                            /> 
                        </>:
                        <FormControl
                            placeholder="City Name"
                            aria-label="City Name"
                            aria-describedby="basic-addon2"
                            onChange={handleChange}
                            
                        />
                    }
                    <Button onClick={fetchWeather} variant="outline-primary" id="button-addon2" size="sm">
                    &#128269;
                    </Button>
                </InputGroup>
                <WeatherCard data={cityWeather}/>
            </div>
        </SearchContainer>
    )
}

export default SaerchComponent
