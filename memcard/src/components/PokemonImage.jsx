import React from 'react';
import './card.css'
const PokemonImage = ({ name, image,onClick}) => {

  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div id='pokemon-card' >
      <h3 className='name'>{pokemonName}</h3>
      <img src={image} className='picture' alt={pokemonName} onClick={onClick} />
    </div>
  );
};

export default PokemonImage;