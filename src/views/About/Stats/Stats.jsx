import React from "react";
import { Flex } from "rebass/styled-components";

import Item from "./Item";

const Stats = () => {
  return (
    <Flex flexDirection={"column"}>
      <Item title="Living in">Barcelona</Item>
      <Item title="E-mail">
        <a href="mailto:albacasasarzua1b@gmail.com">
          albacasasarzua1b@gmail.com
        </a>
      </Item>
      <Item title="Bootcamp">Neoland</Item>
      <Item title="University">BAU · Universidad de Diseño</Item>
    </Flex>
  );
};

export default Stats;
