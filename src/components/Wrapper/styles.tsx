import { styled } from "styled-components";
import { theme } from "variables";

export const WrapperComponent = styled.div`
  width: 100%;
  height: 100%;
  background: var(--black-color);

  @media (min-width: ${theme.breakpoints.sm}px) {
    color: red;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    color: blue;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    color: yellow;
  }
`;
