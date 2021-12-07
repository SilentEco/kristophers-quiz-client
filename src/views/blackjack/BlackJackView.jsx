import { useState, useEffect } from "react";
import BlackJackAPIService from "../../api/service/BlackJackAPIService";

export const BlackJackView = () => {
  const [loading, setLoading] = useState(true);
  const [currentDeck, setCurrentDeck] = useState();
  const [drawnCard, setdrawnCard] = useState([]);
  const [score, setScore] = useState();

  const getDeck = async () => {
    try {
      const { data } = await BlackJackAPIService.getNewDeck();
      setCurrentDeck(data);
      console.log(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const drawCardFromDeck = async () => {
    try {
      const { data } = await BlackJackAPIService.drawCardFromDeck(
        currentDeck.deck_id,
        1
      );
      setdrawnCard([...drawnCard, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const firstDraw = async () => {
    try {
      const { data } = await BlackJackAPIService.drawCardFromDeck(
        currentDeck.deck_id,
        2
      );
      setdrawnCard([...drawnCard, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const scoreConverter = (value) => {
    switch (value) {
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "10":
        return 10;
      case "JACK":
        return 10;
      case "QUEEN":
        return 10;
      case "KING":
        return 10;
      case "ACE":
        return score + 11 >= 21 ? 1 : 11;
      default:
        return null;
    }
  };

  const calculateScore = () => {
    let calcScore = 0;
    drawnCard.map((x) => (calcScore += scoreConverter(x.cards[0].value)));
    // setScore((prevState) => console.log(prevState));
    setScore(calcScore);
  };

  const displayCards = () => {
    return drawnCard.map((x, i) => (
      <img
        style={{ width: 100 }}
        src={`https://deckofcardsapi.com/static/img/${drawnCard?.[i]?.cards[0].code}.png`}
        alt=""
        key={i}
      />
    ));
  };

  useEffect(() => {
    getDeck();
  }, []);

  useEffect(() => {
    firstDraw();
  }, [currentDeck]);

  useEffect(() => {
    calculateScore();
  }, [drawnCard]);

  if (!loading) {
    return (
      <div>
        <h4>Current Score: {score}</h4>
        <button onClick={() => getDeck()}>NEW GAME</button>
        <button onClick={() => drawCardFromDeck()}>HIT</button>
        {displayCards()}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
