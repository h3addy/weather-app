import React from 'react'
import styled from 'styled-components'


const Styles = styled.div`
    position: fixed;
    bottom: 5%;
    left: 50%;
    .icon-scroll,
    .icon-scroll:before {
        position: absolute;
        left: 50%;
    }
    
    .icon-scroll {
        width: 20px;
        height: 30px;
        margin-left: -20px;
        top: 50%;
        margin-top: -35px;
        box-shadow: inset 0 0 0 1px #fff;
        border-radius: 25px;
        background-color: #6C63FF;
    }
    .icon-scroll:before {
        content: '';
        width: 8px;
        height: 8px;
        background: #fff;
        margin-left: -4px;
        top: 8px;
        border-radius: 4px;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: 2s;
        animation-timing-function: ease-in-out;
        animation-name: scroll;
        background-color: #FF6584;
    }

    @keyframes scroll {
        0%, 100%{
            opacity: 1;
        }
        50%{
            opacity: 1;
            transform: translateY(46px);
        }
    }
`
const ScrollIcon = () => {
    return (
        <Styles>
            <div className='icon-scroll'></div>
        </Styles>
    )
}

export default ScrollIcon
