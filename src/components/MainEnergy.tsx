import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
import { ReactComponent as Circles } from "../assets/circles.svg";
import Glitch from "./Glitch";

const SimpleCardStyled = styled(SimpleCard)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: rgb(14, 231, 224);
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  min-height: 200px;

  svg {
    padding: 0px;
    overflow: visible;
    opacity: 0.41;
    position: absolute;
  }

  [class^="st"] {
    fill: none;
    stroke: url(#grad1);
    stroke-width: 42;
    stroke-miterlimit: 10;
  }

  .st0 {
    stroke-dasharray: 3.1947, 41.1947;
  }

  .st1 {
    stroke-dasharray: 50, 90, 200, 30, 40, 0;
  }

  .st2 {
    stroke-width: 30;
    stroke-linecap: square;
    stroke-dasharray: 410, 190, 190;
  }

  .st3 {
    stroke-width: 12;
    stroke-linecap: square;
  }

  .st4 {
    stroke-width: 16;
    stroke-linecap: square;
    stroke-dasharray: 450, 220, 220;
  }

  .st6 {
    stroke-width: 2;
    stroke-linecap: square;
    stroke-dasharray: 420, 610;
  }
`;

const Percentage = styled(Glitch)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fcee09;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0;
  margin-left: .2em;
`;

const MainEnergy: React.FC<{
  energy: number;
}> = ({ energy }) => {
  return (
    <SimpleCardStyled>
      <Title>Energie Générale</Title>
      <Container>
        <Circles />
        <Percentage text={`${energy}%`}></Percentage>
      </Container>
    </SimpleCardStyled>
  );
};

export default MainEnergy;
