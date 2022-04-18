import React from "react";
import { Box } from "rebass/styled-components";

const Project = ({ children }) => {
  return (
    <Box width="fit-content" height="100%">
      {children}
    </Box>
  );
};

export default Project;
