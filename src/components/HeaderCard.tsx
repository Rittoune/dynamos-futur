import React from "react";
import styled from "styled-components";
import { ReactComponent as Strava } from "../assets/strava-icon.svg";

const Main = styled.div`
  width: 100%;
  padding: 20px;
  border: 4px solid #0ee7e0;
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #0ee7e0;
  margin-top: 0;
`;
const SubTitle = styled.h2`
  font-size: 1em;
  color: #ffffff;
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
  name: string;
  team: string;
  stravaLink: string;
}> = ({ name, team, stravaLink }) => {
  return (
    <Main>
      <Title>{name}</Title>
      <SubTitle>{team}</SubTitle>
      <Link href={stravaLink}>
        <Strava />
      </Link>
    </Main>
  );
};

export default HeaderCard;
