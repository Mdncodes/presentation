import React from 'react'
import {useSpring, animated} from 'react-spring'

const OutroCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })
      

    return (
        <animated.div style={props} className="LastCard Cards">
            <h3>Vielen Dank für's Zuhören!</h3>
        </animated.div>
    )
}

export default OutroCard;
