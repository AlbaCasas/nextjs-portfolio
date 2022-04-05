import React from "react";
import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import Text from "../../Text";

const Menu = ({ ...props }) => {
  return (
    <Box {...props}>
      <Flex sx={{ gap: "16px", flexDirection: "column" }}>
        <Box>
          <Text>Home</Text>
        </Box>
        <Box>
          <Text>About</Text>
        </Box>
        <Box>
          <Text>Portfolio</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Menu;
