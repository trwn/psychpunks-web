import React from "react";
import Icon1 from "../../images/4.png";
import Icon2 from "../../images/5.png";
import Icon3 from "../../images/6.png";
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamH2,
  TeamP,
  TeamCardIMG,
} from "./TeamElements";
import card1 from './teamcard1.png'
import card2 from './teamcard2.png'
import card3 from './teamcard3.png'

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard >
        <TeamCardIMG src={card3}/>
          <TeamIcon src={Icon1} />
          <TeamH2>Quickscope</TeamH2>
          <TeamP>Marketing</TeamP>
        </TeamCard>
        <TeamCard>
        <TeamCardIMG src={card2}/>
          <TeamIcon src={Icon2} />
          <TeamH2>DEEErab</TeamH2>
          <TeamP>Developer</TeamP>
        </TeamCard>
        <TeamCard>
        <TeamCardIMG src={card1}/>
          <TeamIcon src={Icon3} />
          <TeamH2>Trwn</TeamH2>
          <TeamP>Developer</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
