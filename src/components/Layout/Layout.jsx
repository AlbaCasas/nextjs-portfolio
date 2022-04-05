import React from "react";
import { Flex } from "rebass";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={["column", "column", "row"]}>
      <Nav />
      {children}
    </Flex>
  );
};

export default Layout;
