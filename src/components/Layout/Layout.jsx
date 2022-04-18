import React from "react";
import { Box, Flex } from "rebass/styled-components";

import Nav from "../Nav";

const Layout = ({ children, isFullScreen }) => {
  return (
    <Flex flexDirection={["column", "column", "row"]} height="100vh">
      <Nav />
      <Flex
        flexDirection="column"
        px={[4, null, 8]}
        alignItems="center"
        py={8}
        width={1}
        height={isFullScreen ? "100%" : "fit-content"}
      >
        <Box
          py={7}
          maxWidth={880}
          width={1}
          height={isFullScreen ? "100%" : "fit-content"}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
