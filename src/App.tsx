import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Rate from "./components/Rate";
import Recommendation from "./components/Recommandations";
import MainEnergy from "./components/MainEnergy";

export type Sex = "male" | "female";

export interface Athlete {
  name: string;
  team: string;
  energy: number;
  about: string;
  sex: Sex;
  age: number;
  sodium: number;
  glucose: number;
  lactate: number;
  recommended: string;
  stravaLink: string;
}

const mockAthlete: Athlete = {
  name: "John Doe",
  team: "Team A",
  energy: 78,
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  sex: "male",
  age: 25,
  sodium: 4,
  glucose: 8,
  lactate: 2,
  recommended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  stravaLink: "https://www.strava.com/athletes/13471750",
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  background: radial-gradient(circle, #043b3b 0%, rgba(0, 0, 0, 1) 100%);
  padding: 20px;
  overflow: auto;
`;

function App() {
  const [athlete, setAthlete] = useState<Athlete>(mockAthlete);

  return (
    <Main>
      <HeaderCard
        name={athlete.name}
        team={athlete.team}
        stravaLink={athlete.stravaLink}
      />
      <About sex={athlete.sex} about={athlete.about} />
      <Rate
        sodium={athlete.sodium}
        glucose={athlete.glucose}
        lactate={athlete.lactate}
      />
      <MainEnergy energy={athlete.energy} />
      <Recommendation recommendation={athlete.recommended} />
    </Main>
  );
}

export default App;
