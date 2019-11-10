import React from 'react'
import {useSpring, animated} from 'react-spring'
import rficon from './assets/rficon.jpg'

const AuslandsCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Auslandseinsatz:</h2>
            <div className="grid-wrapper-abroad">
                <div className="grid-item-abroad-1">
                    <h4>Lösung für ein Monitoring</h4>
                    <p>Automatisieren von Konfigurationsaufgaben mit dem Robot-Framework</p>
                    <p>Automatisieren von Mobiltelefonen</p>
                    <p>Schreiben von kleinen Powershell Skripten</p>
                </div>
                <div className="grid-item-abroad-2">
                    <img className="" src={rficon}></img>
                </div>
            </div>
        </animated.div>
    )
}

export default AuslandsCard;
