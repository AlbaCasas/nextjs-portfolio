import NextLink from "next/link";
import React from "react";
import { Box } from "rebass/styled-components";

const Link = ({ children, href, isActive, ...props }) => {
  return (
    <Box
      color={isActive ? "primary" : "text"}
      fontWeight={isActive ? 600 : 400}
      sx={{
        textDecoration: "none",
        transition: "all .3s ease",
        cursor: "pointer",
        ":hover": {
          color: "primary",
          letterSpacing: !isActive && "2px",
        },
      }}
      {...props}
    >
      <NextLink href={href}>{children}</NextLink>
    </Box>
  );
};

export default Link;
