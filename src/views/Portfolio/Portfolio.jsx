import { Box, Flex } from "rebass/styled-components";

import { Badge, Project, Text } from "components";

import constants from "../../constants/descriptions";

const { descriptionJobly, descriptionReactBites } = constants;

const Portfolio = ({
  setIsShowModal,
  setTitle,
  setSubtitle,
  setDescription,
}) => {
  const toggleModalJobly = () => {
    setIsShowModal(true);
    setTitle("Jobly");
    setDescription(descriptionJobly);
    setSubtitle("MARKETPLACE");
  };

  const toggleModalReactBites = () => {
    setIsShowModal(true);
    setTitle("ReactBites");
    setSubtitle("byesss");
    setDescription(descriptionReactBites);
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
        <Project
          onClick={toggleModalJobly}
          setTitle={setTitle}
          src="static/preview.png"
        />
        <Project
          onClick={toggleModalReactBites}
          setTitle={setTitle}
          src="static/preview.png"
        />
      </Box>
    </Flex>
  );
};

export default Portfolio;
