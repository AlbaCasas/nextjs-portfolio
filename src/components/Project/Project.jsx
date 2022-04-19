import React from "react";
import { Box } from "rebass/styled-components";

import Image from "../Image";
import Tooltip from "../Tooltip";

const Project = ({ src, title, setTitle, ...props }) => {
  return (
    <Box sx={{ cursor: "pointer" }} height="100%" overflow="hidden" {...props}>
      <Image
        data-tip={title}
        height="100%"
        minHeight={["0", "300px", "300px"]}
        sx={{
          transition: "ease-in .3s all",
          objectFit: "cover",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
        src={src}
        alt={setTitle}
      />
      <Tooltip />
    </Box>
  );
};

export default Project;
