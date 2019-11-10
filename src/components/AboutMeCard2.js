import React from 'react'
import {useSpring, animated} from 'react-spring'
import myPic from './assets/mypic.JPG'

const AboutMeCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Über mich (2/2):</h2>
            <div className="verticalFlexWrapper">
                <img src={myPic}/>
                <ul>
                    <li>Sport</li>
                    <li>Violine im Schulorchester</li>
                    <li>Interesse an Anwendungsentwicklung</li>
                </ul>
            </div>
        </animated.div>
    )
}

export default AboutMeCard;
