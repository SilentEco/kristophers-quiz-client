import Axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const DisplayDataView = () => {
  const [serverResponse, setServerResponse] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  //Olde skoool
  const fetchData = () => {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/squirtle";
    Axios.get(API_URL)
      .then((response) => {
        setServerResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // NYA GET - Använd denna
  const fetchData2 = async () => {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${search}`;
    try {
      const response = await Axios.get(API_URL);
      setServerResponse(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  //POST REQUEST
  const fetchDataPost = async () => {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/squirtle";
    try {
      const response = await Axios.post(API_URL);
      setServerResponse(response);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const displayData = () => {
    return (
      <Center>
        {serverResponse?.data.name && (
          <PokemonName>{serverResponse?.data.name}</PokemonName>
        )}
        {serverResponse?.data.sprites && (
          <PokemonImage
            src={serverResponse?.data.sprites.front_default}
            alt=""
          />
        )}
        {serverResponse?.data.sprites && (
          <>
            <h1>STATS</h1>
            <StatsWrapper>
              <Stats>
                <h1>{serverResponse?.data.stats[0].stat.name}</h1>
                <p>{serverResponse?.data.stats[0].base_stat}</p>
              </Stats>
              <Stats>
                <h2>{serverResponse?.data.stats[1].stat.name}</h2>
                <p>{serverResponse?.data.stats[1].base_stat}</p>
              </Stats>
              <Stats>
                <h3>{serverResponse?.data.stats[2].stat.name}</h3>
                <p>{serverResponse?.data.stats[2].base_stat}</p>
              </Stats>
              <Stats>
                <h4>{serverResponse?.data.stats[3].stat.name}</h4>
                <p>{serverResponse?.data.stats[3].base_stat}</p>
              </Stats>
              <Stats>
                <h5>{serverResponse?.data.stats[4].stat.name}</h5>
                <p>{serverResponse?.data.stats[4].base_stat}</p>
              </Stats>
              <Stats>
                <h6>{serverResponse?.data.stats[5].stat.name}</h6>
                <p>{serverResponse?.data.stats[5].base_stat}</p>
              </Stats>
            </StatsWrapper>
          </>
        )}
      </Center>
    );
  };

  useEffect(() => {
    fetchData2();
  }, []);

  if (!loading) {
    return (
      <Center>
        <h2>Search for a pokemon!</h2>
        <h3>Type the name of your pokemon and hit search.</h3>
        <PokemonSeachbox
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type here..."
        />
        <PokemonSeachButton onClick={() => fetchData2()}>
          Search
        </PokemonSeachButton>
        {displayData()}
      </Center>
    );
  } else {
    return <>loading...</>;
  }
};

const PokemonSeachbox = styled.input`
  text-transform: capitalize;
`;

const PokemonImage = styled.img`
  width: 100px;
`;

const PokemonSeachButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 50px;
`;

const Stats = styled.div`
  border: lightgray 1px solid;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
  justify-content: space-between;
  text-shadow: #33210675 2px 2px 1px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #9f28a35a;
  > p {
    text-shadow: none;
  }
  > h1 {
    margin: 0;
    color: red;
    font-size: 20px;
  }
  > h2 {
    margin: 0;
    color: blue;
    font-size: 20px;
  }
  > h3 {
    margin: 0;
    color: yellow;
    font-size: 20px;
  }
  > h4 {
    margin: 0;
    color: purple;
    font-size: 20px;
  }
  > h5 {
    margin: 0;
    color: orange;
    font-size: 20px;
  }
  > h6 {
    margin: 0;
    color: green;
    font-size: 20px;
  }
`;

const StatsWrapper = styled.div`
  border: Black 2px solid;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 600px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PokemonName = styled.h1`
  text-transform: capitalize;
  font-family: cursive;
`;
