import React from "react";
import { Box } from "rebass/styled-components";

import NextImage from "next/image";

const Image = ({
  src,
  alt,
  blurSrc,
  objectFit = "cover",
  sx,
  priority,
  ...props
}) => {
  return (
    <Box {...props} sx={{ position: "relative", ...sx }}>
      <NextImage
        width="100%"
        height="100%"
        layout="fill"
        objectFit={objectFit}
        src={src}
        alt={alt}
        priority={priority}
        placeholder={blurSrc ? "blur" : "none"}
        blurDataURL={blurSrc}
      />
    </Box>
  );
};

export default Image;
