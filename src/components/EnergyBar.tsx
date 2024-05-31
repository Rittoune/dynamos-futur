import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  background-color: #000000;
  position: absolute;
  bottom: -5px;
  right: 1vw;
  z-index: 2;
  padding-top: 3vw;
  padding-bottom: 0;
  padding-left: 4vw;
  padding-right: 0;
  transform: skew(-25deg);
  border-top: 5px solid #0ee7e0;
  border-left: 5px solid #0ee7e0;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -50px;
    width: 100px;
    height: 100%;
    background-color: #000000;
    z-index: -1;
    transform: skew(25deg);
  }
`;

const Cell = styled.div<{ active: boolean }>`
  width: 4vw;
  height: 4vw;
  background-color: #fcee09;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
  /* transform: skew(-5deg); */
`;

const EnergyBar: React.FC<{ value: number }> = ({ value }) => {
  const totalCell = 5;

  return (
    <Container>
      {/* <Title>Énergie</Title> */}
      {Array.from({ length: totalCell }, (_, index) => (
        <Cell active={index <= value - 1} key={index} />
      ))}
    </Container>
  );
};

export default EnergyBar;
