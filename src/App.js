import React, {useState} from 'react';
import './App.css';

import IntroCard from './components/IntroCard'
import AboutMeCard from './components/AboutMeCard'
import AboutMeCard2 from './components/AboutMeCard2'
import StudieninhalteCard from './components/StudieninhalteCard'
import PraxiseinsatzCard from './components/PraxiseinsatzCard'
import PraxiseinsatzCard2 from './components/PraxiseinsatzCard2'
import AuslandsCard from './components/AuslandsCard'
import SoftskillsCard from './components/SoftskillsCard'
import OutroCard from './components/OutroCard'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const App = () => {

  const [cardNumber, changeCardNumber] = useState(0)
  
  const allCards = [<IntroCard/>, 
                    <AboutMeCard/>, 
                    <AboutMeCard2/>, 
                    <StudieninhalteCard/>, 
                    <PraxiseinsatzCard/>, 
                    <PraxiseinsatzCard2/>, 
                    <AuslandsCard/>, 
                    <SoftskillsCard/>,
                    <OutroCard/>]

  const nextCard = () => {
    cardNumber >= allCards.length-1? changeCardNumber(cardNumber) : changeCardNumber(cardNumber+1)
  }

  const prevCard = () => {
    cardNumber <= 0? changeCardNumber(cardNumber) : changeCardNumber(cardNumber-1)
  }

  return (
    <div className="App">
      <ArrowBackIosIcon fontSize="large" htmlColor={cardNumber <= 0? "grey" : "white"} onClick={prevCard}/>
      <div className="App-Cards">
        {allCards[cardNumber]}
      </div>
      <ArrowForwardIosIcon fontSize="large" htmlColor={cardNumber >= allCards.length -1? "grey" : "white"} onClick={nextCard}/>
    </div>
  );
}

export default App;
