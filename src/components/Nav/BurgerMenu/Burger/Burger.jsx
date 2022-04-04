import React from "react";
import { BurgerLine, StyledBurger } from "./styled";

const Burger = ({ isOpen }) => {
  return (
    <StyledBurger isOpen={isOpen}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </StyledBurger>
  );
};

export default Burger;
