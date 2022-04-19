import { useState } from "react";

import { Layout, Modal } from "components";
import Portfolio from "views/Portfolio";

import { Button } from "../components";

const PortfolioPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [subtitle, setSubtitle] = useState();

  return (
    <>
      {!!isShowModal && (
        <Modal
          title={title}
          description={description}
          subtitle={subtitle}
          setIsShowModal={setIsShowModal}
        >
          <Button>View Site</Button>
        </Modal>
      )}
      <Layout>
        <Portfolio
          setTitle={setTitle}
          setSubtitle={setSubtitle}
          setDescription={setDescription}
          setIsShowModal={setIsShowModal}
        />
      </Layout>
    </>
  );
};

export default PortfolioPage;
