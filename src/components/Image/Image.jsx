import React from "react";
import { Image as RebassImage } from "rebass/styled-components";

const Image = ({ src, alt, ...props }) => {
  return <RebassImage {...props} src={src} alt={alt} />;
};

export default Image;
