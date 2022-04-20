import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { Box, Flex } from "rebass/styled-components";

import { Icon, Text } from "components";

import Avatar from "./Avatar";

const Home = () => {
  return (
    <Flex
      sx={{ gap: [3, null, 8] }}
      flexDirection={["column", null, "row"]}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Avatar
        src="/static/photo.png"
        alt="avatar"
        minWidth={[200, null, 300]}
        maxWidth={[200, null, 300]}
        height={[200, null, 300]}
      />
      <Flex
        sx={{ gap: 3 }}
        flexDirection="column"
        alignItems={["center", null, "flex-start"]}
        textAlign={["center", null, "left"]}
        maxWidth="400px"
      >
        <Text variant="heading">Alba Casas</Text>
        <Text variant="italic">
          Full-stack developer with a passion for learning best practices and
          creating the best applications.
        </Text>
        <Flex>
          <Box
            as="a"
            mr={3}
            href="https://www.linkedin.com/in/alba-casas/"
            target="_blank"
          >
            <Icon color="primary" fontSize="32px" icon={RiLinkedinBoxFill} />
          </Box>
          <Box as="a" target="_blank" href="https://github.com/AlbaCasas">
            <Icon color="primary" fontSize="32px" icon={RiGithubFill} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
