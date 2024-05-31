import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
import RateBar from "./RateBar";

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

const Rate: React.FC<{
  sodium: number;
  glucose: number;
  lactate: number;
}> = ({ sodium, glucose, lactate }) => {
  return (
    <SimpleCardStyled>
      <Title>Taux</Title>
      <RateBar name="Sodium" value={sodium} />
      <RateBar name="Glucose" value={glucose} />
      <RateBar name="Lactate" value={lactate} />
    </SimpleCardStyled>
  );
};

export default Rate;
