import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Rate from "./components/Rate";
import Recommendation from "./components/Recommandations";
import MainEnergy from "./components/MainEnergy";
import AthleteSelector from "./components/AthleteSelector";
import Loader from "./components/Loader";

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

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  background: radial-gradient(circle, #043b3b 0%, rgba(0, 0, 0, 1) 100%);
  padding: 20px;
  overflow: auto;
`;

function App() {
  const [athlete, setAthlete] = useState<Athlete>();
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined = undefined;
    if (athlete !== undefined) {
      timeout = setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [athlete]);

  return (
    <Main>
      {athlete === undefined && loader ? (
        <AthleteSelector setAthlete={setAthlete} />
      ) : athlete && !loader ? (
        <>
          <HeaderCard athlete={athlete} />
          <About sex={athlete.sex} about={athlete.about} />
          <Rate
            sodium={athlete.sodium}
            glucose={athlete.glucose}
            lactate={athlete.lactate}
          />
          <MainEnergy energy={athlete.energy} />
          <Recommendation recommendation={athlete.recommended} />
        </>
      ) : (
        <Loader name={athlete?.name || "..."} />
      )}
    </Main>
  );
}

export default App;
