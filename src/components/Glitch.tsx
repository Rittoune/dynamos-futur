import React from "react";
import styled from "styled-components";
import { ReactComponent as Strava } from "../assets/strava-icon.svg";
import { Athlete } from "../App";

const Main = styled.div`
  width: 100%;
  padding: 20px;
  border: 4px solid #0ee7e0;
  position: relative;
  z-index: 1;
  /* padding-bottom: 8vw; */
  display: flex;
  justify-content: space-between;
`;

const Text = styled.h1<{ text: string }>`
  font-size: 2em;
  margin-top: 0;
  position: relative;
  color: #fff;
  animation: glitch-skew 10s infinite linear alternate-reverse;
  &::before {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: 2px;
    text-shadow: -2px 0 #0ee7e0;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
  }
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: -2px;
    text-shadow: -2px 0 #ff00c1, 2px 2px #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 1s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% {
      clip: rect(34px, 9999px, 72px, 0);
      transform: skew(0.79deg);
    }
    5% {
      clip: rect(13px, 9999px, 52px, 0);
      transform: skew(0.42deg);
    }
    10% {
      clip: rect(40px, 9999px, 81px, 0);
      transform: skew(0.57deg);
    }
    15% {
      clip: rect(100px, 9999px, 69px, 0);
      transform: skew(0.5deg);
    }
    20% {
      clip: rect(50px, 9999px, 51px, 0);
      transform: skew(0.34deg);
    }
    25% {
      clip: rect(98px, 9999px, 35px, 0);
      transform: skew(0.31deg);
    }
    30% {
      clip: rect(63px, 9999px, 70px, 0);
      transform: skew(0.43deg);
    }
    35% {
      clip: rect(80px, 9999px, 99px, 0);
      transform: skew(0.45deg);
    }
    40% {
      clip: rect(87px, 9999px, 49px, 0);
      transform: skew(0.45deg);
    }
    45% {
      clip: rect(90px, 9999px, 65px, 0);
      transform: skew(0.76deg);
    }
    50% {
      clip: rect(1px, 9999px, 30px, 0);
      transform: skew(0.66deg);
    }
    55% {
      clip: rect(60px, 9999px, 42px, 0);
      transform: skew(0.59deg);
    }
    60% {
      clip: rect(41px, 9999px, 28px, 0);
      transform: skew(0.82deg);
    }
    65% {
      clip: rect(24px, 9999px, 71px, 0);
      transform: skew(0.1deg);
    }
    70% {
      clip: rect(97px, 9999px, 9px, 0);
      transform: skew(0.51deg);
    }
    75% {
      clip: rect(79px, 9999px, 4px, 0);
      transform: skew(0.89deg);
    }
    80% {
      clip: rect(3px, 9999px, 67px, 0);
      transform: skew(0.15deg);
    }
    85% {
      clip: rect(89px, 9999px, 25px, 0);
      transform: skew(0.77deg);
    }
    90% {
      clip: rect(15px, 9999px, 96px, 0);
      transform: skew(0.78deg);
    }
    95% {
      clip: rect(13px, 9999px, 63px, 0);
      transform: skew(0.36deg);
    }
  }
  @keyframes glitch-anim2 {
    0% {
      clip: rect(24px, 9999px, 39px, 0);
      transform: skew(0.7deg);
    }
    5% {
      clip: rect(98px, 9999px, 18px, 0);
      transform: skew(0.64deg);
    }
    10% {
      clip: rect(81px, 9999px, 24px, 0);
      transform: skew(0.68deg);
    }
    15% {
      clip: rect(99px, 9999px, 81px, 0);
      transform: skew(0.8deg);
    }
    20% {
      clip: rect(42px, 9999px, 56px, 0);
      transform: skew(0.52deg);
    }
    25% {
      clip: rect(4px, 9999px, 73px, 0);
      transform: skew(0.13deg);
    }
    30% {
      clip: rect(37px, 9999px, 90px, 0);
      transform: skew(0.63deg);
    }
    35% {
      clip: rect(79px, 9999px, 30px, 0);
      transform: skew(0.66deg);
    }
    40% {
      clip: rect(36px, 9999px, 35px, 0);
      transform: skew(0.56deg);
    }
    45% {
      clip: rect(66px, 9999px, 42px, 0);
      transform: skew(0.76deg);
    }
    50% {
      clip: rect(97px, 9999px, 11px, 0);
      transform: skew(0.98deg);
    }
    55% {
      clip: rect(87px, 9999px, 67px, 0);
      transform: skew(0.5deg);
    }
    60% {
      clip: rect(22px, 9999px, 59px, 0);
      transform: skew(0.39deg);
    }
    65% {
      clip: rect(31px, 9999px, 34px, 0);
      transform: skew(0.29deg);
    }
    70% {
      clip: rect(97px, 9999px, 11px, 0);
      transform: skew(0.89deg);
    }
    75% {
      clip: rect(33px, 9999px, 88px, 0);
      transform: skew(0.6deg);
    }
    80% {
      clip: rect(62px, 9999px, 21px, 0);
      transform: skew(0.42deg);
    }
    85% {
      clip: rect(68px, 9999px, 40px, 0);
      transform: skew(0.16deg);
    }
    90% {
      clip: rect(4px, 9999px, 38px, 0);
      transform: skew(0.14deg);
    }
    95% {
      clip: rect(77px, 9999px, 61px, 0);
      transform: skew(0.44deg);
    }
  }
  @keyframes glitch-skew {
    0% {
      transform: skew(-3deg);
    }
    10% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(-3deg);
    }
    30% {
      transform: skew(1deg);
    }
    40% {
      transform: skew(4deg);
    }
    50% {
      transform: skew(1deg);
    }
    60% {
      transform: skew(5deg);
    }
    70% {
      transform: skew(1deg);
    }
    80% {
      transform: skew(0deg);
    }
    90% {
      transform: skew(3deg);
    }
  }
`;

const Glitch: React.FC<{
  text: string;
}> = ({ text, ...props }) => {
  return (
    <Text {...props} text={text}>
      {text}
    </Text>
  );
};

export default Glitch;
