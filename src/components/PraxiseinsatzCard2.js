import React from 'react'
import {useSpring, animated} from 'react-spring'
import mqtticon from './assets/mqtt.png'
import reacticon from './assets/reacticon.png'

const PraxiseinsatzCard2 = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Praxiseinsatz (2/2):</h2>
            <div className="grid-wrapper-intern">
                <div className="grid-item-intern-1">
                    <h4>Testautomatisierung</h4>
                    <p>Automatisieren von Fernbedienungseingaben</p>
                    <p>Steuerung der Setterbox über MQTT</p>
                    <p>Frontendapplikation mit React für unsere Tester</p>
                    <p>MQTT Workshop für ein anderes Team</p>
                </div>
                <div className="grid-item-intern-2">
                    <img className="" src={mqtticon}></img>
                    <img className="" src={reacticon}></img>
                </div>
            </div>
        </animated.div>
    )
}

export default PraxiseinsatzCard2;
