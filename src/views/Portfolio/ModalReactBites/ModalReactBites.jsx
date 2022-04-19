import React from "react";

import { Button, Link, Modal } from "../../../components";
import { descriptions } from "../constants";

const ModalReactBites = ({ closeModal }) => {
  const title = "React Bites";
  const description = descriptions.reactBites;
  const subtitle = "CHALLENGES";
  const src = "static/react-bites.png";
  const url = "https://reactbites.netlify.app";
  return (
    <Modal
      title={title}
      description={description}
      subtitle={subtitle}
      src={src}
      closeModal={closeModal}
    >
      <Link href={url}>
        <Button as="a" href={url} marginTop={4}>
          View Site
        </Button>
      </Link>
    </Modal>
  );
};

export default ModalReactBites;
