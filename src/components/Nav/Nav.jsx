import { useState } from "react";
import { Flex } from "rebass/styled-components";
import Text from "../Text";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import Burger from "./BurgerMenu/Burger";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex
        px={[4, 4, 8]}
        py={3}
        alignItems={["center", null, "flex-start"]}
        height={["auto", null, "100vh"]}
        width={[1, null, 350]}
        flexDirection={["row", null, "column"]}
        justifyContent={["space-between", null, "center"]}
        bg="secondary"
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "neutral",
          gap: 4,
          zIndex: 10,
          position: "relative",
        }}
      >
        <Text variant="subheading">Works</Text>
        <Menu display={["none", null, "block"]} />
        <Burger
          display={["block", "block", "none"]}
          isOpen={isOpen}
          onClick={toggleBurger}
        />
      </Flex>
      <BurgerMenu
        onBurgerClick={toggleBurger}
        isOpen={isOpen}
        display={["block", null, "none"]}
      />
    </>
  );
};

export default Nav;
