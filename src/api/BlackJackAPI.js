import Axios from "axios";

const BlackJackAPI = Axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
});

export default BlackJackAPI;
