import React from "react";

import Text from "../../Text";

const ModalSubtitle = ({ children }) => {
  return (
    <Text
      sx={{ borderBottom: "1px solid gray" }}
      pr={1}
      pb={1}
      variant="bagde"
      width="fit-content"
    >
      {children}
    </Text>
  );
};

export default ModalSubtitle;
