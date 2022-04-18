import React from "react";
import { Box, Flex, Text } from "rebass/styled-components";

import Image from "../../components/Image";
import Stats from "./Stats";

const About = () => {
  return (
    <Box>
      <Image
        src="static/horizontal-headshot.png"
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
            Hello, I am a creative developer based in Barcelona and happy to
            travel all over Europe to capture your big day in candid and
            authentic photos. I will create a lasting memory of the people.
          </Text>
        </Box>
        <Box width={[1, null, 0.5]}>
          <Stats />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
