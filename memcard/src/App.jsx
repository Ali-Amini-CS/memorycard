import React from 'react';
import PokemonBoard from './components/PokemonBoard';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='appheader'>
        <h2>Pokemon Memory Game</h2>
        <h3 className='game-instructions'>Instructions:</h3>
        <ol className='instructions'>
          <li>Goal is to click all 10 pokemon without clicking on same one twice</li>
          <li>Each time you click on a pokemon you get 1pt and the cards will reshuffle</li>
          <li>If you click the same pokemon twice you lose</li>
        </ol>
      </div>
      <PokemonBoard />
    </div>
  );
}

export default App;
