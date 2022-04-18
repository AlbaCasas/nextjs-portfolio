import React from "react";
import { Box } from "rebass/styled-components";

import { BurgerLine, StyledBurger } from "./styled";

const Burger = ({ isOpen, onClick, ...props }) => {
  return (
    <Box {...props}>
      <StyledBurger isOpen={isOpen} onClick={onClick}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </StyledBurger>
    </Box>
  );
};

export default Burger;
