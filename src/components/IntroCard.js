import React from 'react'
import {useSpring, useTransition, animated} from 'react-spring'

const IntroCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })
      

    return (
        <animated.div style={props} className="FirstCard Cards">
            <h1>Madani Niasse</h1>
            <p>Dualer Student der Angewandten Informatik</p>
        </animated.div>
    )
}

export default IntroCard;
