import React from 'react'
import {useSpring, animated} from 'react-spring'

const SoftskillsCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Softskills</h2>
            <div className="grid-wrapper-study">
                <div className="grid-item-soft">
                    <h4>Teamfähigkeit</h4>
                </div>
                <div className="grid-item-soft">
                    <h4>Lernfähigkeit</h4>
                </div>
                <div className="grid-item-soft">
                    <h4>Motivation</h4>
                </div>
                <div className="grid-item-soft">
                    <h4>Verantwortungsbewusstsein</h4>
                </div>
                <div className="grid-item-soft">
                    <h4>Hilfsbereitschaft</h4>
                </div>
                <div className="grid-item-soft">
                    <h4>Ehrgeiz</h4>
                </div>
            </div>
        </animated.div>
    )
}

export default SoftskillsCard;
