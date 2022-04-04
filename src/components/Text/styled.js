import styled, { css } from "styled-components";

const bodyCss = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const bodyItalicCss = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: "italic";
`;

const headingCss = css`
  font-size: 55px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const subHeadingCss = css`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const StyledText = styled.span`
  display: inline-block;
  text-decoration: none;
  margin: 0;
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return headingCss;
      case "subheading":
        return subHeadingCss;
      case "Italic":
        return bodyItalicCss;
      default:
        return bodyCss;
    }
  }}
  color: ${({ color }) => color};
  width: fit-content;
`;
