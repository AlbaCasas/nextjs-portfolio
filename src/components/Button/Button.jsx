import React from "react";
import { Button as ButtonNext } from "rebass/styled-components";

import Text from "../Text";

const Button = ({ children }) => {
  return (
    <ButtonNext
      alignItems="center"
      justifyContent="center"
      bg="primary"
      py={2}
      px={3}
      sx={{
        cursor: "pointer",
        transition: "0.3s;",
        ":hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Text color="white" variant="italic">
        {children}
      </Text>
    </ButtonNext>
  );
};

export default Button;
