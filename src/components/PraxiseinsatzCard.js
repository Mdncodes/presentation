import React from 'react'
import {useSpring, animated} from 'react-spring'
import nodeicon from './assets/nodejsicon.png'
import tsicon from './assets/tsicon.png'

const PraxiseinsatzCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Praxiseinsatz (1/2):</h2>
            <div className="grid-wrapper-intern">
                <div className="grid-item-intern-1">
                    <h4>Automatisierung</h4>
                    <p>Automatisieren von Fernbedienungseingaben</p>
                    <p>Implementierung mit Nodejs; Zugriff über eine serielle Verbindung mit der Setterbox</p>
                </div>
                <div className="grid-item-intern-2">
                    <img className="" src={nodeicon}></img>
                    <img className="" src={tsicon}></img>
                </div>
            </div>
        </animated.div>
    )
}

export default PraxiseinsatzCard;
