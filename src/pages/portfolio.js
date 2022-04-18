import { useState } from "react";

import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Portfolio from "../views/Portfolio";

const PortfolioPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      {!!isShowModal && <Modal>hola</Modal>}
      <Layout>
        <Portfolio setIsShowModal={setIsShowModal} />
      </Layout>
    </>
  );
};

export default PortfolioPage;
