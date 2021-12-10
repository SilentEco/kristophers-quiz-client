import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import styled from "styled-components";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavigationWrapper>
      <Nav onClick={() => navigate(RoutingPath.startView)}>QUIZ</Nav>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
`;

const Nav = styled.p`
  :hover {
    background-color: lightgreen;
    cursor: pointer;
  }
  :active {
    background-color: red;
    box-shadow: 2px 2px 3px;
  }
  padding: 10px;
  font-size: x-large;
  border: 2px solid black;
  border-radius: 4px;
  margin-left: 2px;
  background-color: lightgray;
`;
