import React from "react";
import { Button as ButtonNext } from "rebass/styled-components";

import Text from "../Text";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <ButtonNext
      {...props}
      alignItems="center"
      justifyContent="center"
      variant={variant}
      py={2}
      px={3}
      sx={{
        textDecoration: "none",
        transition: "all .3s ease",
        cursor: "pointer",
        ":hover": {
          letterSpacing: "2px",
        },
      }}
    >
      <Text color="inherit" lineHeight={2}>
        {children}
      </Text>
    </ButtonNext>
  );
};

export default Button;
