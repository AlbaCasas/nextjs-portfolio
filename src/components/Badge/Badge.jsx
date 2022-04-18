import React from "react";
import { Box } from "rebass/styled-components";
import Text from "../Text";

const Badge = ({ children, ...props }) => {
  return (
    <Box {...props} width="fit-content" bg={"neutral"} p={2}>
      <Text variant="badge">{children}</Text>
    </Box>
  );
};

export default Badge;
