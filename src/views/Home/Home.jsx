import React from "react";
import img from "../../../public/photo.png";
import { Flex } from "rebass/styled-components";
import Text from "../../components/Text";
import Avatar from "./Avatar";
import { Box } from "rebass/styled-components";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Icon from "../../components/Icon";
const Home = () => {
  return (
    <Flex
      sx={{ gap: 24 }}
      flexDirection={["column", "column", "row"]}
      justifyContent="center"
      alignItems="center"
      margin={[24, 24, 0]}
      marginRight={[null, null, 40]}
    >
      <Avatar
        src={img}
        alt="avatar"
        minWidth={[200, 200, 300]}
        maxWidth={[200, 200, 300]}
        height={[200, 200, 300]}
      />
      <Flex
        sx={{ gap: 16 }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        maxWidth="400px"
      >
        <Text variant="headingSmall">ALBA CASAS</Text>
        <Text variant="italic">
          Full-stack developer with a passion for learning best practices and
          creating the best applications.
        </Text>
        <Box fontSize="32px">
          <Icon icon={RiLinkedinBoxFill} mr={3} />
          <Icon icon={RiGithubFill} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
