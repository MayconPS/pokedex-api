import React from "react";
import pokedex from "../assets/Pokedex.png"
import { WelcomeContainer } from "../Style/Style";
import { WelcomeButton } from "../Style/Style";
const Welcome = ({ onStartClick }) => {
  return (
    <WelcomeContainer>
      <img className="image" src={pokedex} alt="image_pokedex" />
      <WelcomeButton className="btn-wel" onClick={onStartClick}>Começar</WelcomeButton>
      </WelcomeContainer>
  );
};

export default Welcome;
