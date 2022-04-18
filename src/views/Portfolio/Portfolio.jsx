import { Box, Flex } from "rebass/styled-components";

import { Badge, Project, Text } from "components";

const Portfolio = ({ setIsShowModal }) => {
  const toggleModal = () => {
    setIsShowModal(true);
  };

  return (
    <Flex flexDirection="column" sx={{ gap: 7 }}>
      <Flex sx={{ gap: 2 }} flexDirection="column" justifyContent="flex-start">
        <Badge>PORTFOLIO</Badge>
        <Text variant="subheading">Full-Stack Portfolio</Text>
      </Flex>
      <Box
        display="grid"
        sx={{ gap: 7, gridTemplateColumns: ["1fr", "repeat(2, 1fr)", null] }}
      >
        <Project onClick={toggleModal} title="Jobly" src="static/preview.png" />
        <Project title="Jobly" src="static/preview.png" />
      </Box>
    </Flex>
  );
};

export default Portfolio;
