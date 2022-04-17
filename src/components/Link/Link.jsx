import React from "react";
import { Box } from "rebass/styled-components";

const Link = ({ children, href, ...props }) => {
  return (
    <Box
      as="a"
      href={href}
      color="inherit"
      sx={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Link;
