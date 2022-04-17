import React from "react";
import { Flex } from "rebass/styled-components";
import Item from "./Item";

const Stats = () => {
  return (
    <Flex flexDirection={"column"}>
      <Item title="City">Barcelona</Item>
      <Item title="Email">albacasasarzua1b@gmail.com</Item>
      <Item title="Phone">+34 601 110 336</Item>
      <Item title="Study">BAU · Universidad de Diseño</Item>
    </Flex>
  );
};

export default Stats;
