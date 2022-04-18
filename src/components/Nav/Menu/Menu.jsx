import { useRouter } from "next/router";
import { Box, Flex } from "rebass/styled-components";

import Link from "../../Link";

const Menu = ({ ...props }) => {
  const router = useRouter();

  return (
    <Box {...props}>
      <Flex sx={{ gap: 3, flexDirection: "column" }}>
        <Link isActive={router.pathname === "/"} href="/">
          Home
        </Link>
        <Link isActive={router.pathname === "/about"} href="/about">
          About
        </Link>
        <Link isActive={router.pathname === "/portfolio"} href="/portfolio">
          Portfolio
        </Link>
      </Flex>
    </Box>
  );
};

export default Menu;
