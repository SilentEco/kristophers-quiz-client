import styled from "styled-components";

export const MoviesView = () => {
  return (
    <MainDiv>
      <H1 isColored="blue">Movieeesss!</H1>
      <H1> Movieeesss!</H1>
      <H1 isColored="white"> Movieeesss!</H1>
    </MainDiv>
  );
};

/* styled */
const H1 = styled.h1`
  padding: 0;
  margin: 0;
  color: ${(props) => (props.isColored ? props.isColored : "red")};
`;

const MainDiv = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;
