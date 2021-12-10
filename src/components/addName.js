import { useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import React, { Fragment, useState } from "react";
import RoutingPath from "../routes/RoutingPath";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputName = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    try {
      await fetch("https://kristophers-quiz-server.herokuapp.com/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: user }),
      });
      console.log("User added: " + user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleClick = () => {
    onSubmitForm();
    navigate(RoutingPath.QuizAPI);
  };
  console.log(user);
  return (
    <Fragment>
      <Titel>VÄLKOMMEN TILL QUIZET</Titel>
      <H2>Ange ditt namn</H2>
      <Nameform onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="För och efternamn"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={() => handleClick()}>START</button>
      </Nameform>
    </Fragment>
  );
};

export default InputName;

const Titel = styled.p`
  color: red;
  text-align: center;
  font-size: 25px;
`;
const H2 = styled.p`
margin-left: 5px
  color: black;
  font-size: 20px;
`;

const Nameform = styled.form`
  display: flex;
  height: 30px;
  margin-left: 5px;
  > button {
    margin-left: 10px;
  }
`;
