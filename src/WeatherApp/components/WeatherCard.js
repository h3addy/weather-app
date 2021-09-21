import React from 'react'
import styled from 'styled-components'


const WCard = styled.div`
        margin: 0 auto;
        width: 400px;
        height: 300px;
        /* border: 0.5px solid rgba(0,0,0,0.5); */
        border-radius: 0.2rem;
        display: grid;
        grid-template-rows: 0.2fr 2fr 0.1fr 0.5fr;
        grid-template-areas:
            'date'
            'details'
            '.'
            'days';
        position: relative;

        /* ----------------- */
        /* &::before {
                content: '';
                display: block;
                position: absolute;
                background-color: #ccc;
                left: 0;
                right: 0;
                bottom: 0;
                top: 50%;
                z-index: -1;
                box-shadow: 0 0 40px lighten(#000, 60%);
                transition: box-shadow .2s ease-in-out;
            }
            &.level-3:hover::before {
                        box-shadow: 0 0 80px lighten(#000, 60%);
                    } */
        /* --------------------- */
        .day-date{
            grid-area: date;
        }
        .day-date p {
            margin: 0;
        }

        .weather-details{
            border: 0.5px solid rgba(0,0,0,0.5);
            grid-area: details;
            display: flex;
            position: relative;
        }

        .div-1{
            position: relative;
            width: 100%;
            z-index: -1;
            color: #fff;
            /*   height: 100%; */
            /*   border: solid 1px #000; */
        }

        .div-1 h1,
        .div-1 p{
            letter-spacing: 0.1rem;
            
            margin-left: 1rem;
        }

        .div-1 h1{
            margin-top: 1.5rem;
            font-size: 1.5rem;
            font-weight: 900;
        }
        .div-1 p{
            font-size: 1rem;
            font-weight: 400;
        }

        .div-1 span{
            font-size: 0.7rem;
        }

        svg{
            z-index: -2;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        path {
            /*   stroke: black; */
            fill: #3F3D56;
        }

        .div-2 {
            padding: 5px 15px;
            position: absolute;
            right: 0;
            top: 0;
        }

        .div-2 img {
            background-color: #9a97c1;
        }

        .next-days{
            border: 0.5px solid rgba(0,0,0,0.5);
            grid-area: days;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            background-color: #3F3D56;
            color: #fff;
        }

        .day{
            position: relative;
            border-right: 1px solid rgba(255, 255, 255, 0.5);
        }

        .day h5{
            text-align: center;
            margin: 0 auto;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.06rem;
            padding: 0.3rem 0;
        /*   text-transform: uppercase; */
        }

        .day h5::after{
            content: '';
            margin: 0 auto;
            position: absolute;
            left: 0;
            bottom: 50%;
            right: 0;
            height: 1px;
            width: 2rem;
            background-color: #fff;
        }

        .day p{
            padding: 0.3rem 0;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 500;
            margin: 0 auto;
        }

        .day span{
            font-size: 0.7rem;
        }

        @media only screen and (max-width: 1000px){
            margin: 1.2rem auto;
            width: 300px;
            height: 240px;
            display: grid;
            grid-template-rows: 0.1fr 1fr 0.2fr;
            grid-template-areas:
                'date'
                'details'
                'days';
            gap: 0.2rem;

            .day-date{
                grid-area: date;
                height: 20px;
                font-size: 0.8rem;
                /* border-bottom: 1px solid rgba(0,0,0,0.5); */
            }




            .next-days{
                border-top: 1px solid rgba(0,0,0,0.4);
                grid-area: days;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
            }

            .day{
                position: relative;
                color: #fff;
                border-right: 1px solid rgba(255, 255, 255, 0.5);
            }

            .day h5{
                text-align: center;
                margin: 0 auto;
                font-weight: 500;
                font-size: 0.7rem;
                letter-spacing: 0.06rem;
            /*   text-transform: uppercase; */
            }

            .day p{
                text-align: center;
                font-size: 0.7rem;
                font-weight: 200;
                margin: 0 auto;
            }
        }
`

const WeatherCard = (props) => {
    
    if (props.data === undefined) return <h1>Fetching data</h1>
    // else return <h1>Fetchde data</h1>
    else {
        // console.log('here', props.data)

        const generateForecastDays = (dummy_arr) => {
            const day_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            let a2 = dummy_arr.map((eachDay)=>{
                const day_no = new Date(eachDay.date).getDay()
                const tempp = eachDay.day.avgtemp_c
                return {day: day_arr[day_no], temp: tempp}
            })

            let ind = 0;

            for(let i=0; i<day_arr.length-1;i++){
                if (a2[0].day === day_arr[i]){
                    ind = i;
                    break;
                }
            }
            const le = a2.length
            for(let i=ind+le; i<day_arr.length; i++){
                // console.log(i)
                a2.push({day: day_arr[i], temp: a2[i-le].temp})
            }
            for(let i=0; i<ind; i++){
                a2.push({day: day_arr[i], temp: a2[i].temp})
            }
            return a2;
        }

        const last_updated = props.data.current.last_updated
        const city_name = props.data.location.name
        const current_text = props.data.current.condition.text
        const current_temp = props.data.current.temp_c
        const current_wind = props.data.current.wind_kph
        const current_humidity = props.data.current.humidity
        const icon_src = props.data.current.condition.icon
        const dummy_arr = props.data.forecast.forecastday
        const forecast_arr = generateForecastDays(dummy_arr)
        // console.log(forecast_arr)

        return (
            <WCard className="level-3">
                <div className="day-date">
                    <p>{new Date(last_updated).toDateString()}</p>
                </div>
                <div className="weather-details">
                    <div className="div-1">
                    <h1>{city_name}</h1>
                    <p>{current_text}, {current_temp}<span>&#x2103;</span></p>
                    <p>Wind: {current_wind}<span>kph</span></p>
                    <p>Humidity: {current_humidity}</p>
                    <svg width="100%" height="100%" viewBox="15 0 100 100">
                        <path d="
                        M -50, 0
                        h 80
                        Q 80, 0
                            80, 30
                            85, 50
                            100, 55
                            120, 65
                            125, 100  
                        h -180
                        v -100
                            
                        "/>
                    </svg>
                    </div>
                    
                    <div className="div-2">
                    <img src={icon_src} alt={current_text}/>
                    </div>
                </div>
                <div className="next-days">
                    { forecast_arr.map((eachDay, index) => {
                        const dayy = eachDay.day
                        const tempp = eachDay.temp
                        
                        return (
                                <div key={index} className={`day${index} day`}>
                                    <h5>{dayy}</h5>
                                    <p>{tempp} &#x2103;</p>
                                </div>
                            
                        )
                    })}
                </div>
            </WCard>
        )
    }
    
}

export default WeatherCard

