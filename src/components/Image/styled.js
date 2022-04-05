import styled from "styled-components";
import { keyframes } from "styled-components";
import Image from "next/image";

const morph = keyframes`
0% {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
`;

export const StyledImage = styled(Image)`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${morph} 8s ease-in-out infinite 1s;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  overflow: hidden;
  outline: 10px solid rgba(255, 255, 255, 0.3);
  outline-offset: -10px;
`;
