import React from "react";
import styled from "styled-components";
import EnergyBar from "./EnergyBar";

const Main = styled.div`
  width: 100%;
  padding: 20px;
  border: 4px solid #0ee7e0;
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #0ee7e0;
  margin-top: 0;
`;
const SubTitle = styled.h2`
  font-size: 1em;
  color: #ffffff;
`;

const HeaderCard: React.FC<{ name: string; team: string }> = ({
  name,
  team,
}) => {
  return (
    <Main>
      <Title>{name}</Title>
      <SubTitle>{team}</SubTitle>
      <EnergyBar value={3} />
    </Main>
  );
};

export default HeaderCard;
