import React from "react";
import { Image as RebassImage } from "rebass/styled-components";

import NextImage from "next/image";

const Image = ({ src, alt, ...props }) => {
  return <RebassImage forwardedAs={NextImage} {...props} src={src} alt={alt} />;
};

export default Image;
