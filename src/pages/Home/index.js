import React from "react";
import img from "../../../public/photo.png";
import { Flex } from "rebass/styled-components";
import Text from "../../components/Text";
import Avatar from "../../components/Image";

const Home = () => {
  return (
    <Flex
      sx={{ gap: 24 }}
      flexDirection={["column", "column", "row"]}
      justifyContent="center"
      alignItems="center"
      margin={[24, 24, 0]}
    >
      <Avatar
        src={img}
        alt="avatar"
        width={[200, 200, 300]}
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
      </Flex>
    </Flex>
  );
};

export default Home;
