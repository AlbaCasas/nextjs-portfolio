import React from "react";

import { Modal } from "../../../components";
import { descriptions } from "../constants";

const ModalMusicPlayer = ({ closeModal }) => {
  const title = "Music player";
  const description = descriptions.musicPlayer;
  const subtitle = "REACT + ITUNES";
  const src = "static/music-player.png";
  const url = "https://music-player-ac.netlify.app/";
  const githubUrl = "https://github.com/AlbaCasas/music-player";

  return (
    <Modal.Modal
      title={title}
      description={description}
      subtitle={subtitle}
      src={src}
      closeModal={closeModal}
    >
      <Modal.Buttons url={url} githubUrl={githubUrl} />
    </Modal.Modal>
  );
};

export default ModalMusicPlayer;
