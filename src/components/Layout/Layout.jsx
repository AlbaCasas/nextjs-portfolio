import React from "react";
import { Flex } from "rebass/styled-components";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={["column", "column", "row"]}>
      <Nav />
      <Flex
        flexDirection="column"
        justifyContent={["flex-start", null, "center"]}
        px={[3, 3, 8]}
        py={8}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
