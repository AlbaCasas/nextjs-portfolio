import { css } from "styled-components";

const base = css`
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.2;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default base;
