import { useState } from "react";
import { Box } from "rebass/styled-components";
import Burger from "./Burger";
import Menu from "../Menu";

const BurgerMenu = ({ isOpen, ...props }) => {
  return (
    <Box {...props}>
      <Burger isOpen={isOpen} />
      <Menu />
    </Box>
  );
};

export default BurgerMenu;
