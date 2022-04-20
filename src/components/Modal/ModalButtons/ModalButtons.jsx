import React from "react";
import { Flex } from "rebass";

import { Button } from "components";

const ModalButtons = ({ url, githubUrl }) => {
  return (
    <Flex sx={{ gap: 4 }}>
      <a href={url} target="_blank" rel="noreferrer">
        <Button mt={2}>View Site</Button>
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <Button variant="secondary" mt={2}>
          View Github
        </Button>
      </a>
    </Flex>
  );
};

export default ModalButtons;
