import React from "react";
import img from "../../../public/photo.png";
import { Flex } from "rebass/styled-components";
import Text from "../../components/Text";
import Avatar from "./Avatar";
import { Box } from "rebass/styled-components";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Icon from "../../components/Icon";
import Link from "../../components/Link";
import { Card } from "rebass/styled-components";

const Home = () => {
  return (
    <Flex
      sx={{ gap: [3, null, 8] }}
      flexDirection={["column", null, "row"]}
      justifyContent="center"
      alignItems="center"
      minHeight={["calc(100vh - 192px)", null, "auto"]}
    >
      <Avatar
        src={img}
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
        <Box>
          <Link mr={3} href="https://www.linkedin.com/in/alba-casas/">
            <Icon fontSize="32px" icon={RiLinkedinBoxFill} />
          </Link>
          <Link href="https://github.com/AlbaCasas">
            <Icon fontSize="32px" icon={RiGithubFill} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
