import Image from "next/image";
import React from "react";
import { Flex } from "rebass/styled-components";
import img from "../../../public/photo.png";

const About = () => {
  return (
    <Flex width={"100%"} height="150px">
      <Image src={img} alt="avatar" objectFit="cover"></Image>
    </Flex>
  );
};

export default About;
