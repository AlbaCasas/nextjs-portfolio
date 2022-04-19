import React from "react";

import { Button, Link, Modal } from "../../../components";
import { descriptions } from "../constants";

const ModalJobly = ({ closeModal }) => {
  const title = "Jobly";
  const description = descriptions.jobly;
  const subtitle = "MARKETPLACE";
  const src = "static/preview.png";
  const url = "https://jobly-ac.netlify.app";
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

export default ModalJobly;
