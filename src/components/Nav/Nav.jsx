import { useState } from "react";
import { Flex } from "rebass/styled-components";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      px={[4, 4, 8]}
      py={3}
      alignItems="center"
      height={["auto", "auto", "100vh"]}
      width={[1, 1, 350]}
      flexDirection={["row", "row", "column"]}
      bg="secondary"
    >
      Alba Casas
      <BurgerMenu
        onClick={toggleBurger}
        isOpen={isOpen}
        display={["block", "block", "none"]}
      />
      <Menu display={["none", "none", "block"]} />
    </Flex>
  );
};

export default Nav;
