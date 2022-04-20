import React from "react";
import { Flex } from "rebass";

import { Button } from "components";

const ModalButtons = ({ url, githubUrl }) => {
  return (
    <Flex
      width={1}
      flexDirection={["column", "row", "row"]}
      sx={{ gap: [2, 4, 4] }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <Button mt={2} width={[1, 1, "fit-content"]}>
          View Site
        </Button>
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <Button
          variant="secondary"
          mt={2}
          width={[1, "fit-content", "fit-content"]}
        >
          View Github
        </Button>
      </a>
    </Flex>
  );
};

export default ModalButtons;
