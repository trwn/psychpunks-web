import styled from "styled-components";

export const TeamContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #afd9d1;

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const TeamWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TeamCard = styled.div`
  background: #728e89;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 80px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-outs;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    transform: all 0.2s ease-in-outs;
    cursor: pointer;
  }
`;

export const TeamCardIMG = styled.img`
object-fit: fill;
width: 750px;
margin-top: -80px;
height: 1100px;


`;

export const TeamIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  outline: 2px solid white;
  position: absolute;
`;
export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 664px;
  position: absolute;
  
  @media screen and (max-width: 480) {
    font-size: 2rem;
  }
`;

export const TeamH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: white;
  position: absolute;
  margin-top: 170px;
`;

export const TeamP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
  position: absolute;
  margin-top: 200px;
`;
