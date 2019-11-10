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
            <h2>Über mich (1/2):</h2>
            <div className="verticalFlexWrapper">
                <img src={myPic}/>
                <ul>
                    <li>Nationalität malisch, deutsch</li>
                    <li>Abitur 2016</li>
                    <li>Auslandsaufenthalt in Mali</li>
                    <li>Duales Studium ab Oktober 2017</li>
                </ul>
            </div>
            
        </animated.div>
    )
}

export default AboutMeCard;
