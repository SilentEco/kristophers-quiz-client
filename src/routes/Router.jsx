import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizAPI } from "../api/QuizAPI";
import { UserContext } from "../shared/provider/UserProvider";
import HighScore from "../views/quiz/HighScore";
import StartView from "../views/quiz/StartView";
import RoutingPath from "./RoutingPath";

export const Router = ({ children }) => {
  const [authenticateUser, setAuthenticateUser] = useContext(UserContext);
  return (
    <BrowserRouter>
      {children}
      {/* <span>Username: {authenticateUser}</span> */}
      <Routes>
        <Route path={RoutingPath.startView} element={<StartView />} />
        <Route path={RoutingPath.QuizAPI} element={<QuizAPI />} />
        <Route path={RoutingPath.HighScore} element={<HighScore />} />
      </Routes>
    </BrowserRouter>
  );
};
