import { useState } from 'react'
import React from 'react'
import PokemonBoard from './components/PokemonBoard'
import './App.css';

function App() {

  return (
    <>
    <h3>Pokemon Memory Game</h3>
    
    <h5 className='game-instructions'>How to Play:</h5>
    <ol>
      <li>Goal is to click all 10 pokemon without clicking on same one twice</li>
      <li>Eachtime you click on a pokemon you get 1pt and the cards will reshuffle</li>
      <li>If you click the same pokemon twice you lose</li>
      
    </ol>
    <PokemonBoard></PokemonBoard>
    </>
  )
}

export default App
