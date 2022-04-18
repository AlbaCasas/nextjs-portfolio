import { useState } from "react";

import { Layout, Modal } from "components";
import Portfolio from "views/Portfolio";

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
