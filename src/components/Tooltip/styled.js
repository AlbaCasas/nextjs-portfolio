import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const StyledTooltip = styled(ReactTooltip)`
  background: white;
  font-size: 18px !important;
  font-family: ${({ theme }) => theme.fonts.body};
  padding: 5px 15px !important;
  font-weight: 600;
  border-radius: 0 !important;
`;
