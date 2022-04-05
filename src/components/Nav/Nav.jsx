import { useState } from "react";
import { Flex } from "rebass/styled-components";
import Text from "../Text";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      px={[4, null, 8]}
      py={3}
      alignItems={["center", "center", "flex-start"]}
      height={["auto", null, "100vh"]}
      width={[1, null, 350]}
      flexDirection={["row", null, "column"]}
      justifyContent={["space-between", null, "center"]}
      bg="secondary"
      sx={{
        borderBottom: "1px solid",
        borderBottomColor: "neutral",
        gap: "24px",
      }}
      marginBottom={[200, 200, 0]}
      marginRight={[0, 0, "15%"]}
    >
      <Text variant="subheading">My works</Text>
      <BurgerMenu
        onBurgerClick={toggleBurger}
        isOpen={isOpen}
        display={["block", null, "none"]}
      />
      <Menu display={["none", null, "block"]} />
    </Flex>
  );
};

export default Nav;
