import http from "../PokemonAPI";

const searchPokemon = (search) => {
  return http.get(`/pokemon/${search}`);
};

const getAllPokemon = () => {
  return http.get(`/pokemon`);
};

export default {
  searchPokemon,
  getAllPokemon,
};
