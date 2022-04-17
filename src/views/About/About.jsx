import Image from "next/image";
import React from "react";
import { Flex } from "rebass";
import img from "../../../public/photo.png";

const About = () => {
  return (
    <Flex width={1} height="auto" mt={["120px", null, 0]}>
      <Image src={img} height="200px" alt="avatar" objectFit="cover" />
    </Flex>
  );
};

export default About;
