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

const Cell = styled.div<{ $active: boolean, $isLast: boolean }>`
  width: 2vw;
  height: 8vw;
  background-color: #0ee7e0;
  opacity: ${(props) => (props.$active ? 1 : 0.3)};
 ${(props) => (props.$isLast ? 'animation: wave 2s ease-in-out infinite' : '')};

 @keyframes wave {
    0% {
      box-shadow: 0 0 2px #0ee7e0
    }
    50% {
      box-shadow: 0 0 5px #0ee7e0
    }
 }
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
          <Cell $active={Boolean(index <= value - 1)} $isLast={Boolean(index === value - 1)} key={index} />
        ))}
      </Cells>
    </Container>
  );
};

export default RateBar;
