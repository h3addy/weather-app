import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 auto;
        background-color: #fff;
        width: 100%;
        padding: 15px 5px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        /* border-radius: 25px; */
    }

    .navbar-collapse {
        justify-content: flex-end;
        width: 50%;
    }
    .navbar-brand {
        font-weight: 700;
        color: #6C63FF;
    }
    
    .navbar-nav .nav-link,
    .navbar-nav .nav-link:visited{
        position: relative;
        font-weight: 500;
        color: #6C63FF;
    }

    .nav-link::after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background-color: #FF6584;
            transition: transform 300ms ease-in-out;
            transform: scaleX(0);
        }

    .nav-link:hover::after,
    .nav-link:focus::after{
        transform: scaleX(1);
    }

    @media only screen and (max-width: 1000px){
        .navbar {
        position: relative;}
    }
`

const NavigationBar = () =>  (
    <Styles>
        <Navbar expand="sm"  collapseOnSelect={true} width="100%">
            <Navbar.Brand href="/">City Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="https://www.weatherapi.com/" target="_blank">API</Nav.Link>
                    <Nav.Link href="https://github.com/" target="_blank">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export default NavigationBar

