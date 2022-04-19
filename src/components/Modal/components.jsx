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

export const Content = ({ onClick, children, ...props }) => (
  <Flex
    width="968px"
    maxWidth="100%"
    height="fit-content"
    bg="secondary"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    px={6}
    py={6}
    sx={{ gap: "8px", position: "relative" }}
    {...props}
  >
    {children}
    <Icon
      onClick={onClick}
      color="primary"
      fontSize="24px"
      icon={RiCloseFill}
      sx={{
        position: "absolute",
        top: 2,
        right: 2,
        cursor: "pointer",
        ":hover": {
          transform: "scale(1.2)",
        },
      }}
    />
  </Flex>
);
