import React from "react";
import { Box } from "rebass/styled-components";
import NextImage from "next/image";

const Image = ({ src, alt, className, ...props }) => {
  return (
    <Box {...props}>
      <NextImage src={src} alt={alt} className={className} />
    </Box>
  );
};

export default Image;
