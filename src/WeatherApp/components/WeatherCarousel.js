import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import rain from '../assets/rain.svg'
import sunny from '../assets/sunny.svg'
import snowy from '../assets/snow.svg'
import styled from 'styled-components'


const Styles = styled.div`
    color: #3F3D56;
    margin: 10% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50vh;
    line-height: 2.2em;
    /* border: 1px solid red; */

    .content h1{
        font-size: 4rem;
        font-weight: 900;
        letter-spacing: 0.15rem;
    }

    .content p{
        font-weight: 700;
        letter-spacing: 0.15rem;
    }

    .content a {
        position: relative;
        text-decoration: none;
        letter-spacing: 0.15rem;
        color: #3F3D56;
        font-weight: 700;
        display: block;
        width: 10rem;
        text-align: center;
        padding: 7px 5px;
        border: 1px solid rgba(0,0,0,0.4);
        transition: color 500ms ease-in-out;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #6C63FF;
            transition: transform 500ms ease-in-out;
            transform-origin: left;
            transform: scaleX(0);
            z-index: -1;
        }

        &:hover::after,
        &:focus::after{
            transform: scaleX(1);
        }

        &:hover{
            color: #efef;
        }
    }

    .carousel {
        width: 50%;
        height: 100%;
        /* border: 1px solid red; */
    }
    .carousel-indicators{
        background-color: #6C63FF;
    }

    /* .carousel-control-next-icon,
    .carousel-control-prev-icon{
        background-color: #6C63FF;
    } */
    .carousel-item {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
    }

    .carousel-item img {
        width: 100%;
        height: 400px;
    }

    @media only screen and (max-width: 1000px){
        width: 100%;
        height: 60vh;
        margin: 10% auto;
        flex-direction: column-reverse;
        justify-content: space-between;
        /* align-items: space-between; */
        line-height: 1em;
        /* border: 1px solid red; */

        .content{
            height: 40%;
            text-align: center;
            /* border: 1px solid red; */
        }

        .content h1{
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 0;
            
        }

        .content p{
            font-weight: 300;
            letter-spacing: 0;
        }
        
        .content a {
            margin: 0 auto;
        }
        .carousel {
            width: 50%;
            height: 60%;
            /* border: 1px solid red; */
        }

        .carousel-control-next-icon,
        .carousel-control-prev-icon{
            /* background-color: #6C63FF; */
            display: none;
        }

        .carousel-item {
            width: 100%;
            height: 100%;
            /* border: 1px solid red; */
        }

        .carousel-item img {
            width: 100%;
            height: 170px;
        }
    }

    @media only screen and (min-height: 700px) and (max-height: 799px){
        .carousel-item img {
            width: 100%;
            height: 250px;
        }
    }

    @media only screen and (min-height: 800px) and (max-height: 899px){
        .carousel-item img {
            width: 100%;
            height: 270px;
        }
        .carousel-indicators{
            background-color: #6C63FF;
        }
    }
`

const WeatherCarousel = (props) => (
    <>
        <Styles>
            
            <div className="content">
                <h1>Weather App</h1>
                <p>To get the weather updates and forecast.</p>
                <p>Search for any city and get the weather for</p>
                <p> current day as well as the forecast for </p>
                <p>6 days.</p>
                <a href="#search-container" rel="noreferrer">Search</a>
            </div>
            <Carousel> 
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={rain}
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Mumbai</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={sunny}
                    alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>London</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={snowy}
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Paris</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Styles>
    </>
)

export default WeatherCarousel




