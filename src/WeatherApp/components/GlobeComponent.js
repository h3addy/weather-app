import React, { useState, useRef, useEffect} from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import styled from 'styled-components'

const Styles = styled.div`
    .vanta-canvas{
        height: 100vh;
    }
`
const GlobeBG = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(GLOBE({
            el: myRef.current
        }))
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <Styles ref={myRef}>{props.children}</Styles>
}

export default GlobeBG
