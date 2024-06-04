import React from "react";
import styled from "styled-components";
import Glitch from "./Glitch";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DNA = styled.div`
  position: relative;
  transform: scale(2);
  span {
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    transform: scale(0, 0);
  }
  div:nth-child(odd) {
    position: absolute;
    span:nth-child(1) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    span:nth-child(2) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    span:nth-child(3) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
    span:nth-child(4) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 0.8s;
      animation-delay: 0.8s;
    }
    span:nth-child(5) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
    span:nth-child(6) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
    }
    span:nth-child(7) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 1.4s;
      animation-delay: 1.4s;
    }
    span:nth-child(8) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 1.6s;
      animation-delay: 1.6s;
    }
    span:nth-child(9) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 1.8s;
      animation-delay: 1.8s;
    }
    span:nth-child(10) {
      -webkit-animation: animateFirstDots 1s ease-in-out infinite;
      animation: animateFirstDots 1s ease-in-out infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }
  }

  div:nth-child(even) {
    span:nth-child(1) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    span:nth-child(2) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    span:nth-child(3) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
    span:nth-child(4) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 0.8s;
      animation-delay: 0.8s;
    }
    span:nth-child(5) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
    span:nth-child(6) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
    }
    span:nth-child(7) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 1.4s;
      animation-delay: 1.4s;
    }
    span:nth-child(8) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 1.6s;
      animation-delay: 1.6s;
    }
    span:nth-child(9) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 1.8s;
      animation-delay: 1.8s;
    }
    span:nth-child(10) {
      -webkit-animation: animateSecondDots 1s ease-in-out infinite;
      animation: animateSecondDots 1s ease-in-out infinite;
      animation-direction: alternate-reverse;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }
  }

  @-webkit-keyframes animateFirstDots {
    0% {
      transform: translateY(200%) scale(0.7, 0.7);
      background-color: #0ee7e0;
    }
    100% {
      transform: translateY(-200%) scale(1, 1);
      background-color: #0ee7e0;
    }
  }

  @keyframes animateFirstDots {
    0% {
      transform: translateY(200%) scale(0.7, 0.7);
      background-color: #0ee7e0;
    }
    100% {
      transform: translateY(-200%) scale(1, 1);
      background-color: #0ee7e0;
    }
  }
  @-webkit-keyframes animateSecondDots {
    0% {
      transform: translateY(200%) scale(0.7, 0.7);
      background-color: #0ee7e0;
    }
    100% {
      transform: translateY(-200%) scale(1, 1);
      background-color: #0ee7e0;
    }
  }
  @keyframes animateSecondDots {
    0% {
      transform: translateY(200%) scale(0.7, 0.7);
      background-color: #0ee7e0;
    }
    100% {
      transform: translateY(-200%) scale(1, 1);
      background-color: #0ee7e0;
    }
  }
`;

const Title = styled(Glitch)`
  font-size: 2em;
  margin: 20px;
  text-align: center;
  margin-bottom: 100px;
`;

const Loader: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Container>
      <Title text={`Chargement de ${name}`} />
      <DNA>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </DNA>
    </Container>
  );
};

export default Loader;
