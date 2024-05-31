import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
import { Sex } from "../App";
import Male from "../assets/male.png";
import Female from "../assets/female.png";

const SimpleCardStyled = styled(SimpleCard)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
  position: relative;
`;

const Image = styled.img`
  width: 25%;
`;

const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 1em;
  color: #0ee7e0;
  margin: 0;
`;

const Text = styled.p`
  font-size: 0.8em;
  color: white;
  text-align: justify;
  margin: 10px 0;
`;



const About: React.FC<{ sex: Sex; about: string }> = ({
  sex,
  about,
}) => {
  return (
    <SimpleCardStyled>
      {sex === "female" ? <Image src={Female} /> : <Image src={Male} />}
      <Rigth>
        <Title>À propos</Title>
        <Text>{about}</Text>
        {/* <Link href={stravaLink}>
          <Strava />
        </Link> */}
      </Rigth>
    </SimpleCardStyled>
  );
};

export default About;
