import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroBg = styled.div`
  position: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: pink;
`;

export const HeroDiv = styled.div`
  color: white;
  padding-top: 10px;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroLogo = styled.img`
  height: 100px;
  width: auto;
  align-self: center;
  margin-bottom: -20px;

  @media screen and (max-width: 768px) {
    height: 65px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroP1 = styled.p`
  margin-top: 10px;
  color: white;
  font-size: 28px;
  text-align: center;
  max-width: 600px;
  text-shadow: 1px 1px black;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  color: white;
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  color: black;
  margin-left: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 10px;
  background: white;
  white-space: nowrap;
  padding: 12px 30px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    transition: all 0.2s ease-in-out;
    background: #3f5c64;
    border: 2px solid white;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 50px;
  height: 30px;
  text-align: center;
  margin-top: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
