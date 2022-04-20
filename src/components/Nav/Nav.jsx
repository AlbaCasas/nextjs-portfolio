import { useState } from "react";
import { Box, Flex } from "rebass/styled-components";

import Link from "next/link";

import Text from "../Text";
import BurgerMenu from "./BurgerMenu";
import Burger from "./BurgerMenu/Burger";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box minWidth={[0, 0, 350]} />
      <Flex
        px={[5, null, 8]}
        py={3}
        alignItems={["center", null, "flex-start"]}
        height={["auto", null, "100vh"]}
        width={[1, null, 350]}
        flexDirection={["row", null, "column"]}
        justifyContent={["space-between", null, "center"]}
        bg="secondary"
        sx={{
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: "neutral",
          gap: 5,
          zIndex: 10,
          position: "fixed",
        }}
      >
        <Link href="/">
          <Text sx={{ cursor: "pointer" }} variant="subheading">
            A. CASAS
          </Text>
        </Link>
        <Menu display={["none", null, "block"]} />
        <Burger
          display={["block", null, "none"]}
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
