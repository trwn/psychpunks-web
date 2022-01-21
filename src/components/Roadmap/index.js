import React from "react";
import roadmap from './roadmap.png';

import {
  RoadmapContainer,
  RoadmapIMG,
} from "./RoadmapElements";

const roadMap = () => {
  return (
    <RoadmapContainer>
      <RoadmapIMG src={roadmap}></RoadmapIMG>
    </RoadmapContainer>
  );
};

export default roadMap;
