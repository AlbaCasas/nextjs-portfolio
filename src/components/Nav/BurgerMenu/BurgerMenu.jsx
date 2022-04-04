import { Box } from "rebass/styled-components";
import Burger from "./Burger";
import Menu from "../Menu";

const BurgerMenu = ({ isOpen, onBurgerClick, ...props }) => {
  return (
    <Box {...props}>
      <Burger isOpen={isOpen} onClick={onBurgerClick} />
      <Box
        bg="secondary"
        width={1}
        px={4}
        py={5}
        sx={{
          position: "fixed",
          zIndex: -1,
          right: 0,
          top: !isOpen ? "-120px" : "64px",
          transition: "top 1s ease",
        }}
      >
        <Menu />
      </Box>
    </Box>
  );
};

export default BurgerMenu;
