import { useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import React, { Fragment, useState } from "react";
import RoutingPath from "../routes/RoutingPath";
import { useNavigate } from "react-router-dom";

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
      <h1>QUIZ</h1>
      <h2>Ange namn</h2>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="För och efternamn"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={() => handleClick()}>START</button>
      </form>

      <p>_______________________________</p>
    </Fragment>
  );
};

export default InputName;
