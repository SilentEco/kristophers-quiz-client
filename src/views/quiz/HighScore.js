import Axios from "axios";
import { useEffect, useState } from "react";

const HighScore = () => {
  const [serverResponse, setServerResponse] = useState();
  const [loading, setLoading] = useState(true);

  // NYA GET - Använd denna
  const fetchData2 = async () => {
    const API_URL = `https://kristophers-quiz-server.herokuapp.com/scores`;
    try {
      const response = await Axios.get(API_URL);
      setServerResponse(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {
    fetchData2();
  }, []);

  if (!loading) {
    return (
      <>
        <h2>name: {serverResponse?.data[6].name}</h2>
        <h1>Points: {serverResponse.data[6].points}</h1>;
      </>
    );
  } else {
    return <>loading...</>;
  }
};

export default HighScore;
