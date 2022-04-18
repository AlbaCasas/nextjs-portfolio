import { RiCloseFill } from "react-icons/ri";
import { Flex } from "rebass/styled-components";

import Icon from "../Icon";

export const Backdrop = ({ children }) => (
  <Flex
    width="100vw"
    height="100vh"
    justifyContent="center"
    alignItems="center"
    sx={{
      zIndex: 12,
      position: "fixed",
      left: "0",
      top: "0",
    }}
    bg="rgba(0, 0, 0, 0.7)"
    p={4}
  >
    {children}
  </Flex>
);

export const Content = ({ children, ...props }) => (
  <Flex
    width="968px"
    maxWidth="100%"
    height="fit-content"
    bg="secondary"
    justifyContent="center"
    alignItems="center"
    p={5}
    sx={{ position: "relative" }}
    {...props}
  >
    {children}
    <Icon
      color="primary"
      fontSize="24px"
      icon={RiCloseFill}
      sx={{ position: "absolute", top: 2, right: 2 }}
    />
  </Flex>
);
