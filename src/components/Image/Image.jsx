import React from "react";
import { Box } from "rebass/styled-components";
import { StyledImage } from "./styled";

const Image = ({ src, alt, ...props }) => {
  return (
    <Box {...props}>
      <StyledImage src={src} alt={alt} />
    </Box>
  );
};

export default Image;
