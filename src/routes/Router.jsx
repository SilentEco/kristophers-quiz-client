import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { MoviesView } from "../views/movies/MoviesView";
import { DisplayDataView } from "../views/displaydata/DisplayDataView";
import { QuizAPI } from "../api/QuizAPI";
import RoutingPath from "./RoutingPath";
import { useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import { BlackJackView } from "../views/blackjack/BlackJackView";
import StartView from "../views/quiz/StartView";

export const Router = ({ children }) => {
  const [authenticateUser, setAuthenticateUser] = useContext(UserContext);
  return (
    <BrowserRouter>
      {children}
      {/* <span>Username: {authenticateUser}</span> */}
      <Routes>
        <Route path={RoutingPath.startView} element={<StartView />} />
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route path={RoutingPath.moviesView} element={<MoviesView />} />
        <Route
          path={RoutingPath.DisplayDataView}
          element={<DisplayDataView />}
        />
        <Route path={RoutingPath.QuizAPI} element={<QuizAPI />} />
        <Route path={RoutingPath.BlackJackView} element={<BlackJackView />} />
      </Routes>
    </BrowserRouter>
  );
};
