import React from "react";
import { Button as ButtonNext } from "rebass/styled-components";

import Text from "../Text";

const Button = ({ children, ...props }) => {
  return (
    <ButtonNext
      {...props}
      alignItems="center"
      justifyContent="center"
      bg="primary"
      py={2}
      px={3}
      sx={{
        cursor: "pointer",
      }}
    >
      <Text color="white" variant="italic">
        {children}
      </Text>
    </ButtonNext>
  );
};

export default Button;
