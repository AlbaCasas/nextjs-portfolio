import Image from "next/image";
import React from "react";
import { Flex } from "rebass";
import img from "../../../public/photo.png";

const About = () => {
  return (
    <Flex width={1} height={1} mt={["120px", "120px", 0]}>
      <Image src={img} height="200px" alt="avatar" objectFit="cover"></Image>
    </Flex>
  );
};

export default About;
