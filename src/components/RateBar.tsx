import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const Cells = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

const Title = styled.span`
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  margin-right: 40px;
`;

const Cell = styled.div<{ active: boolean }>`
  width: 2vw;
  height: 8vw;
  background-color: #0ee7e0;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;

const RateBar: React.FC<{ name: string; value: number }> = ({
  name,
  value,
}) => {
  const totalCell = 10;

  return (
    <Container>
      <Title>{name}</Title>
      <Cells>
        {Array.from({ length: totalCell }, (_, index) => (
          <Cell active={index <= value - 1} key={index} />
        ))}
      </Cells>
    </Container>
  );
};

export default RateBar;
