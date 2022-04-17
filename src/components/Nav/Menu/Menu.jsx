import { Flex } from "rebass";
import { Box } from "rebass/styled-components";
import Text from "../../Text";

const Menu = ({ setView, ...props }) => {
  return (
    <Box {...props}>
      <Flex sx={{ gap: 3, flexDirection: "column" }}>
        <Box
          onClick={() => {
            setView("home");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Text>Home</Text>
        </Box>
        <Box
          onClick={() => {
            setView("about");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Text>About</Text>
        </Box>
        <Box
          onClick={() => {
            setView("portfolio");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Text>Portfolio</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Menu;
