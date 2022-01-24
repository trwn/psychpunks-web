import React from "react";
import { ImageWrapper, Image } from "./RoadmapElements";
import img from "../../images/roadmap2.png";

const roadMap = () => {
  return (
    <ImageWrapper id="roadmap">
      <Image src={img}></Image>
    </ImageWrapper>
  );
};

export default roadMap;
