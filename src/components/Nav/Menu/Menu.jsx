import { Box, Flex } from "rebass/styled-components";
import Link from "../../Link";

const Menu = ({ ...props }) => {
  return (
    <Box {...props}>
      <Flex sx={{ gap: 3, flexDirection: "column" }}>
        <Box sx={{ cursor: "pointer" }}>
          <Link href="/">Home</Link>
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <Link href="/about">About</Link>
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <Link href="/portfolio">Portfolio</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Menu;
