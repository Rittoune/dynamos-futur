import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const SimpleCardStyled = styled(SimpleCard)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #0ee7e0;
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 0.8em;
  color: white;
  text-align: justify;
  margin: 10px 0 20px;
`;

const Recommendation: React.FC<{
  recommendation: string;
}> = ({ recommendation }) => {
  return (
    <SimpleCardStyled>
      <Title>Recommandation</Title>
      <Text>{recommendation}</Text>
    </SimpleCardStyled>
  );
};

export default Recommendation;
