import React from "react";
import { BurgerLine, StyledBurger } from "./styled";

const Burger = ({ isOpen, onClick }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={onClick}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </StyledBurger>
  );
};

export default Burger;
