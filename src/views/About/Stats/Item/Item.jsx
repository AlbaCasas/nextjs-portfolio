import React from "react";
import { Flex } from "rebass/styled-components";

import Text from "../../../../components/Text";

const Item = ({ title, children }) => {
  return (
    <Flex alignItems={"center"}>
      <Text width="64px" variant="italic-bold">
        {title}:
      </Text>
      <Text variant="body">{children}</Text>
    </Flex>
  );
};

export default Item;
