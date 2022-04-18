import React from "react";
import { Box } from "rebass/styled-components";
import Image from "../Image";

const Project = ({ children, src, title, ...props }) => {
  return (
    <Box height="100%" overflow="hidden" {...props}>
      <Image
        sx={{
          transition: "ease-in .3s all",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
        src={src}
        alt={title}
      />
    </Box>
  );
};

export default Project;
