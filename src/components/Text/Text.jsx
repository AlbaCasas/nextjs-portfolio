import React from "react";

import { StyledText } from "./styled";

const Text = ({ children, width = "fit-content", as = "span", ...props }) => {
  return (
    <StyledText forwardedAs={as} width={width} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
