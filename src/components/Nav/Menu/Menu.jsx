import React from "react";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";

const Menu = ({ ...props }) => {
  return (
    <Box {...props}>
      <Flex sx={{ gap: "24px", flexDirection: "column" }}>
        <Box>Home</Box>
        <Box>About</Box>
        <Box>Portfolio</Box>
      </Flex>
    </Box>
  );
};

export default Menu;
