import React from "react";
import styled from "styled-components";
import { ReactComponent as Strava } from "../assets/strava-icon.svg";
import { Athlete } from "../App";
import Glitch from "./Glitch";

const Main = styled.div`
  width: 100%;
  padding: 20px;
  border: 4px solid #0ee7e0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Glitch)`
  font-size: 2em;
`;
const SubTitle = styled.h2`
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 0;
`;
const Age = styled.h3`
  font-size: 2em;
  margin: 0;
  color: #fcee09;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  position: absolute;
  text-decoration: none;
  bottom: 20px;
  right: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const HeaderCard: React.FC<{
  athlete: Athlete;
}> = ({ athlete }) => {
  const { name, team, age, stravaLink } = athlete;
  return (
    <Main>
      <Left>
        <Title text={name} />
        <SubTitle>{team}</SubTitle>
      </Left>
      <Right>
        <Age>{age}</Age>
      </Right>
      {stravaLink !== "" ?? (
        <Link href={stravaLink}>
          <Strava />
        </Link>
      )}
    </Main>
  );
};

export default HeaderCard;
