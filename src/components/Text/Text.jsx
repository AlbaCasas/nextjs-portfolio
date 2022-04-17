import React from "react";
import { StyledText } from "./styled";

const Text = ({ children, as = "span", ...props }) => {
  return (
    <StyledText forwardedAs={as} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
