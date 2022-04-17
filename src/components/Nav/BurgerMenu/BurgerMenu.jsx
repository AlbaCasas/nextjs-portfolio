import { Box } from "rebass/styled-components";
import Menu from "../Menu";

const BurgerMenu = ({ isOpen, onBurgerClick, ...props }) => {
  return (
    <Box {...props}>
      <Box
        bg="secondary"
        width={1}
        px={4}
        py={5}
        sx={{
          position: "absolute",
          zIndex: 1,
          right: 0,
          top: !isOpen ? "-110px" : "56px",
          transition: "0.5s ease-out",
        }}
      >
        <Menu />
      </Box>
    </Box>
  );
};

export default BurgerMenu;
