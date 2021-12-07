import Axios from "axois";

const PokemonAPI = Axios.Create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default PokemonAPI;
