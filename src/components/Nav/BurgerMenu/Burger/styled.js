import styled, { css } from "styled-components";

export const BurgerLine = styled.div`
  width: 32px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  transition: 0.2s linear;
  position: absolute;
  left: 0;
  top: 0;
`;

const openLinesCss = css`
  & ${BurgerLine} {
    &:first-child {
      top: 9px;
      width: 0%;
      left: 50%;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 9px;
      width: 0%;
      left: 50%;
    }
  }
`;

export const StyledBurger = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  & ${BurgerLine} {
    &:first-child {
      top: 0px;
    }

    &:nth-child(2) {
      top: 9px;
    }

    &:nth-child(3) {
      top: 9px;
    }
    &:nth-child(4) {
      top: 18px;
    }
  }

  ${({ isOpen }) => isOpen && openLinesCss};
`;
