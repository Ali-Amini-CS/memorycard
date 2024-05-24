import React from 'react';

const PokemonImage = ({ name, image,onClick}) => {


  return (
    <div id='pokemon' >
      <h3 className='name'>{name}</h3>
      <img src={image} className='picture' alt={name} onClick={onClick} />
    </div>
  );
};

export default PokemonImage;