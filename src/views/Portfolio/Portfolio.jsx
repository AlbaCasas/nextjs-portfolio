import { useState } from "react";
import { Box, Flex } from "rebass/styled-components";

import { Badge, Project, Text } from "components";

import ModalJobly from "./ModalJobly";
import ModalMusicPlayer from "./ModalMusicPlayer";
import ModalReactBites from "./ModalReactBites";
import { titles } from "./constants";

const MODAL_JOBLY = "jobly";
const MODAL_REACT_BITES = "r-bites";
const MODAL_REACT_MUSIC_PLAYER = "music-player";

const Portfolio = ({ ...props }) => {
  const [shownModalId, setShownModalId] = useState(null);
  const showModalById = (modalId) => {
    setShownModalId(modalId);
  };
  const closeModal = () => {
    setShownModalId(null);
  };
  return (
    <Flex flexDirection="column" sx={{ gap: 7 }} {...props}>
      <Flex sx={{ gap: 2 }} flexDirection="column" justifyContent="flex-start">
        <Badge>PORTFOLIO</Badge>
        <Text variant="subheading">Full-Stack Portfolio</Text>
      </Flex>
      <Box
        display="grid"
        sx={{ gap: 7, gridTemplateColumns: ["1fr", "repeat(2, 1fr)", null] }}
      >
        <Project
          onClick={() => showModalById(MODAL_JOBLY)}
          src="static/preview.png"
          title={titles.jobly}
        />
        <Project
          onClick={() => showModalById(MODAL_REACT_BITES)}
          title={titles.reactBites}
          src="static/react-bites.png"
        />
        <Project
          onClick={() => showModalById(MODAL_REACT_MUSIC_PLAYER)}
          title={titles.musicPlayer}
          src="static/music-player.png"
        />
        {shownModalId === MODAL_JOBLY && <ModalJobly closeModal={closeModal} />}
        {shownModalId === MODAL_REACT_BITES && (
          <ModalReactBites closeModal={closeModal} />
        )}
        {shownModalId === MODAL_REACT_MUSIC_PLAYER && (
          <ModalMusicPlayer closeModal={closeModal} />
        )}
      </Box>
    </Flex>
  );
};

export default Portfolio;
