import { FC } from "react";
import { styled } from "styled-components";

import { theme } from "variables";

interface Props {
  path: string;
  name: string;
}

export const NavItem: FC<Props> = ({ path, name }) => (
  <RoutesItem>
    <RoutesItemLink href={path}>{name}</RoutesItemLink>
  </RoutesItem>
);

const RoutesItem = styled.li`
  margin-bottom: 8px;
`;

const RoutesItemLink = styled.a`
  transition: 0.4s;
  color: ${theme.colors.white};
  font-family: "opensans_bold", sans-serif;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
