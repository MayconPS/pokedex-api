import styled from "styled-components";
import background2 from "../assets/background2.jpg";
import bgAbilit from "../assets/backgroundAbilit.png";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${background2});
  background-size: cover;
`;

export const WelcomeButton = styled.button`
  width: 15vw;
  height: 7vh;
  border-radius: 20px;
  background-color: #f2cb55;
  border-color: #0f6ac0;
  color: azure;
  font-size: large;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #eed535;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
`;

export const LeftContent = styled.div`
  flex-basis: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.7fr));
  grid-gap: 2rem;
  gap: 20px;
  column-gap: 60px;
`;

export const CardContainer = styled.div`
  width: 300px;
  background-image: url(${bgAbilit});
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(31, 30, 30, 0.283);
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #e5e5e5;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

export const RightContent = styled.div`
  flex-basis: 50%;
  width: 33%;
  height: 70%;
  text-align: center;
  position: fixed;
  right: 10px;
  justify-content: center;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const RightContentImage = styled.img`
  margin: 1.5rem;
  height: 160px;
`;

export const RightContentTitle = styled.h1`
  text-transform: uppercase;
  color: white;
  background-image: url(${bgAbilit});
  border-radius: 20px;
  padding: 1px;
`;

export const RightContentParagraph = styled.p`
  color: white;
  text-transform: uppercase;
  padding: 2px;
  font-size: 15px;
  font-weight: bold;
`;

export const TypeContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const TypeGroup = styled.div`
  background-color: #b74555;
  color: white;
  padding: 0.5rem;
  font-size: 10px;
  border-radius: 20px;
  margin-left: 0.2rem;
  text-transform: uppercase;
`;

export const BaseStatContainer = styled.div`
  margin-top: 2rem;
  background-image: url(${bgAbilit});
  border-radius: 5px;
  padding: 5px;
  backdrop-filter: blur(5px);
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 150px;
  height: 30px;
  padding: 0.3rem 0;
  margin: 1rem;
  font-size: 17px;
  font-weight: bold;
  color: white;
  background-color: #b74555;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;
export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const StyledInput = styled.input`
  width: 30%;
  height: 30px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  text-align: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  WelcomeContainer,
  WelcomeButton,
  Container,
  LeftContent,
  CardContainer,
  RightContent,
  RightContentImage,
  RightContentTitle,
  RightContentParagraph,
  TypeContainer,
  TypeGroup,
  BaseStatContainer,
  ButtonGroup,
  StyledButton,
  ContainerInput,
};
