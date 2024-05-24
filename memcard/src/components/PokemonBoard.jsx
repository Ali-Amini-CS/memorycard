// PokemonBoard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonImage from './PokemonImage';
import {ShuffleCards} from './shufflecards';

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

  const reshufflePokemons = () => {
    setPokemons((prevPokemons) => ShuffleCards(prevPokemons));
  };

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <PokemonImage
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          onClick={reshufflePokemons}
        />
      ))}
    </div>
  );
};

export default PokemonBoard;
