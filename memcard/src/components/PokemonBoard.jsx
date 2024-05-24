// PokemonBoard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonImage from './PokemonImage';
import { ShuffleCards } from './shufflecards';
import Scoreboard from './gameboard/scoreboard';

const getRandomPokemonIds = (count, max) => {
  const ids = new Set();
  while (ids.size < count) {
    const randomId = Math.floor(Math.random() * max) + 1;
    ids.add(randomId);
  }
  return Array.from(ids);
};

const PokemonBoard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedImages, setClickedImages] = useState(new Set());
  const [lost,setLost] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      const randomIds = getRandomPokemonIds(10, 500);
      const pokemonDetails = await Promise.all(randomIds.map(async (id) => {
        const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return {
          name: details.data.name,
          image: details.data.sprites.front_default,
        };
      }));

      setPokemons(pokemonDetails);
    };

    fetchPokemons();
  }, []);

  const onPictureClick = (name) => {
    setPokemons((prevPokemons) => ShuffleCards(prevPokemons));

    setClickedImages((prevClickedImages) => {
      if (prevClickedImages.has(name)) {
          setLost(true);
        setScore(0);
        return new Set(); 
      } else {
        const newClickedImages = new Set(prevClickedImages);
        newClickedImages.add(name);
        setScore((prevScore) => prevScore + 1);
        return newClickedImages;
      }
    });
  };

  return (
    <div>
      <Scoreboard score={score} />
      {lost && <div>You lost, try again!</div>}
      {pokemons.map((pokemon, index) => (
        <PokemonImage
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          onClick={() => onPictureClick(pokemon.name)} 
        />
      ))}
    </div>
  );
};

export default PokemonBoard;
