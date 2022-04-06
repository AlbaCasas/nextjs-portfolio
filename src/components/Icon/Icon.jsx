import React from "react";
import { Box } from "rebass/styled-components";

const Icon = ({ icon, children, ...props }) => {
  return (
    <Box as={icon} {...props}>
      {children}
    </Box>
  );
};

export default Icon;
