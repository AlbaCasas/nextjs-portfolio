import React from "react";
import { Box } from "rebass/styled-components";
import Image from "../Image";
import Tooltip from "../Tooltip";

const Project = ({ children, src, title, ...props }) => {
  return (
    <Box sx={{ cursor: "pointer" }} height="100%" overflow="hidden" {...props}>
      <Image
        data-tip={title}
        sx={{
          transition: "ease-in .3s all",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
        src={src}
        alt={title}
      />
      <Tooltip />
    </Box>
  );
};

export default Project;
