import React from 'react'
import {useSpring, animated} from 'react-spring'

const StudieninhalteCard = () => {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1500 }
      })

    return (
        <animated.div style={props} className="Cards">
            <h2>Studieninhalte:</h2>
            <div className="grid-wrapper-study">
                <div className="grid-item-study">
                    <h4>Einführung in die Programmierung</h4>
                    <p>Basics der Programmierung mit C und Java + Algorithmierung und Datenstrukturen und Datenbanken</p>
                </div>
                <div className="grid-item-study">
                    <h4>Webentwicklung</h4>
                    <p>Grundlagen der Webentwicklung mit Webtechnologien, Webanwendungen und Verteilte Anwendungen </p>
                </div>
                <div className="grid-item-study">
                    <h4>Software Engineering</h4>
                    <p>Entwicklung einer mobilen Applikation unter Verwendung von Gitlab und agilen Methoden der Softwareentwicklung</p>
                </div>
                <div className="grid-item-study">
                    <h4>Hardwarenahe Programmierung</h4>
                    <p>Programmierung von Microcontrollern in Rechnerarchitekturen und das Arbeiten mit einem Raspberry Pi in Embedded Systems</p>
                </div>
            </div>
        </animated.div>
    )
}

export default StudieninhalteCard;
