import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
import { Athlete, Sex } from "../App";
import Male from "../assets/male.png";
import Female from "../assets/female.png";
import Glitch from "./Glitch";

const SimpleCardStyled = styled(SimpleCard)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
  position: relative;
  &:hover {
    border-color: rgba(14, 231, 224, .5);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled(Glitch)`
  font-size: 2em;
  color: #ffffff;
  margin: 20px;
  text-align: center;
`;

const Name = styled.span`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  width: 100%;
`

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
      {mockAthletes.map((a) => (
        <SimpleCardStyled onClick={() => setAthlete(a)}>
          <Name>{a.name}</Name>
        </SimpleCardStyled>
      ))}
    </Container>
  );
};

export default AthleteSelector;
