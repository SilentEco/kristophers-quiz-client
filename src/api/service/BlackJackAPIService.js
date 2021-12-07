import http from "../BlackJackAPI";

const getNewDeck = () => {
  return http.get("/new/shuffle/?deck_count=6");
};

const drawCardFromDeck = (deckID, cardsToDraw) => {
  return http.get(`${deckID}/draw/?count=${cardsToDraw}`);
};

export default {
  getNewDeck,
  drawCardFromDeck,
};
