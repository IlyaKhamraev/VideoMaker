import { styled } from "styled-components";

import { theme } from "variables";

export const Wrapper = styled.li`
  margin-right: ${theme.spacing.md}px;
`;

export const Link = styled.a`
  transition: 0.4s;
  font-size: ${theme.size.md}px;
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
