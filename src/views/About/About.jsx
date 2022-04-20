import React from "react";
import { Box, Flex, Text } from "rebass/styled-components";

import { Image } from "components";

import Stats from "./Stats";

const About = () => {
  return (
    <Box>
      <Image
        src="static/about-photo.jpg"
        maxHeight="440px"
        alt="Alba Casas Headshot"
        width={1}
        mb={6}
        sx={{
          objectFit: "cover",
        }}
      />
      <Flex flexDirection={["column", null, "row"]} sx={{ gap: 7 }}>
        <Box width={[1, null, 0.5]}>
          <Text variant="title" mb={4}>
            Alba Casas · Developer
          </Text>
          <Text variant="italic">
            {`Hello! I'm Alba Casas, a creative software developer and enthusiast of everything tech related. 
              I have completed a Full-Stack Bootcamp
              and I am currently enrolled in a Graphic Design (UI/UX) degree.`}
            <br />
            <br />
            {`I believe my background in both graphic design and coding can be a great asset for many companies!`}
          </Text>
        </Box>
        <Box mt={[0, null, 7]} pt={1} width={[1, null, 0.5]}>
          <Stats />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
