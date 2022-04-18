import React from "react";
import { Flex, Box } from "rebass/styled-components";
import Badge from "../../components/Badge";
import Image from "../../components/Image";
import Project from "../../components/Project";
import Text from "../../components/Text";

const Portfolio = () => {
  return (
    <Flex flexDirection="column" sx={{ gap: 8 }}>
      <Flex sx={{ gap: 2 }} flexDirection="column" justifyContent="flex-start">
        <Badge>PORTFOLIO</Badge>
        <Text variant="subheading">Creative Portfolio</Text>
      </Flex>
      <Flex
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        sx={{ gap: 6 }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Project>
          <Image width="420px" src="static/preview.png" alt="jobly" />
        </Project>
      </Flex>
    </Flex>
  );
};

export default Portfolio;
