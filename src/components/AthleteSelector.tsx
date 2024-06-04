import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
import { Athlete } from "../App";
import Glitch from "./Glitch";

const SimpleCardStyled = styled(SimpleCard)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
  position: relative;
  &:hover {
    border-color: rgba(14, 231, 224, 0.5);
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;

const Title = styled(Glitch)`
  font-size: 2em;
  color: #ffffff;
  margin: 20px;
  text-align: center;
  height: 82px;
`;

const Name = styled.span`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const List = styled.div`
  height: calc(100% - 82px);
  overflow: auto;
`;
const mockAthletes: Athlete[] = [
  {
    name: "John",
    team: "Team A",
    energy: 45,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Jeanne",
    team: "Team B",
    energy: 78,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "female",
    age: 35,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Kris",
    team: "Team A",
    energy: 89,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },

  {
    name: "John",
    team: "Team A",
    energy: 45,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Jeanne",
    team: "Team B",
    energy: 78,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "female",
    age: 35,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Kris",
    team: "Team A",
    energy: 89,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },

  {
    name: "John",
    team: "Team A",
    energy: 45,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Jeanne",
    team: "Team B",
    energy: 78,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "female",
    age: 35,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Kris",
    team: "Team A",
    energy: 89,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },

  {
    name: "John",
    team: "Team A",
    energy: 45,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Jeanne",
    team: "Team B",
    energy: 78,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "female",
    age: 35,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
  {
    name: "Kris",
    team: "Team A",
    energy: 89,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sex: "male",
    age: 25,
    sodium: 4,
    glucose: 8,
    lactate: 2,
    recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stravaLink: "",
  },
];

const AthleteSelector: React.FC<{
  setAthlete: Dispatch<SetStateAction<Athlete | undefined>>;
}> = ({ setAthlete }) => {
  return (
    <Container>
      <Title text="Sélectionnez votre profil" />
      <List>
        {mockAthletes.map((a, index) => (
          <SimpleCardStyled key={index} onClick={() => setAthlete(a)}>
            <Name>{a.name}</Name>
          </SimpleCardStyled>
        ))}
      </List>
    </Container>
  );
};

export default AthleteSelector;
