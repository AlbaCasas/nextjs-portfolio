import React from "react";
import { StyledText } from "./styled";

const Text = ({ color, variant, children, ...props }) => {
  return (
    <StyledText color={color} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
