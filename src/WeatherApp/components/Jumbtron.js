import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import jbimg from '../assets/jumboImage.jpg'


const Styles = styled.div`
    .jumbo {
        color: #fff;
        background: url(${jbimg}) no-repeat fixed bottom; 
        background-size: cover;
        height: 100px;
        position: relative;
        z-index: -2;
        margin-top: 2rem;
    }

    .overlay{
        background-color: black;
        opacity: 0.3;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }

`
const Jumbo = styled.div`
    /* padding: 2rem 1rem; */
    margin-bottom: 2rem;
    /* background-color: #e9ecaf; */
    border-radius: .3rem;
    
`
const Jumbtron = () =>  (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Mumbai</h1>
                    <p>To get all weather udpates of your city</p>
                </Container>
            </Jumbo>
        </Styles>
    )


export default Jumbtron

