import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const min = 0;
  const max = 9;
//estados 
  const [secretNumber, setSecretNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [gameMessage, setGameMessage] = useState("");
  const [success, setSuccess] = useState (false)

  const randomNumber = () => {
    return Math.floor (Math.random()*(max - min +1)+min)
  }

  const startGame = () => {
    setSuccess(false);
    setGameMessage("Guess the Number")
    const number=randomNumber()
    setSecretNumber(number);
  }
  const handleClick = (number) => {
    setSelectedNumber(number);
    
  }
  //useEffect
  useEffect (() => {
    //comprobacion del juego
    if(secretNumber){
      if(selectedNumber === secretNumber){
        setSuccess(true)
        setGameMessage("you guessed the number !!");
      }else if(selectedNumber > secretNumber){
        setGameMessage("you guessed is above of the hiden niumber!!");
      }else {
        setGameMessage("you number is belowof hiden number !!")
      }

    }

  }), [selectedNumber]

  return (
    <>
      <div className='container'>
        <div className='game-header'>
          <h1>GUESS NUMBER</h1>
        </div>
        <div className='secret-container'>
          <div className='secret-number'><label>{success ? secretNumber : "?"}</label>
          </div>

        </div>
        <div className='numbers-containers'>
          {
            numbers.map((number, index) => {
              
              return <div key={index}  onClick={() => handleClick(number)} className='secret-number'><label>{number}</label></div>
            })}
        </div>
        <div className='messages-container'>
          <p>{gameMessage}</p>
        </div>
        <div className='play-botton'>
          <button onClick={startGame}>Play the Game</button>
        </div>
        

      </div>
        
    </>
  )
}

export default App
