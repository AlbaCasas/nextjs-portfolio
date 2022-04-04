import { createGlobalStyle } from "styled-components";
import base from "./base";
import reset from "./reset";

export default createGlobalStyle`
  ${reset};
  ${base};
`;
