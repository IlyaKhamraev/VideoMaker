import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { theme } from "variables";

interface Props {
  path: string;
  name: string;
  active: boolean;
}

export const NavItem: FC<Props> = ({ path, name, active }) => (
  <RoutesItem active={active}>
    <RoutesItemLink to={path}>{name}</RoutesItemLink>
  </RoutesItem>
);

const RoutesItem = styled.li<{ active?: boolean }>`
  margin-bottom: 8px;

  a {
    color: ${(props) =>
      props.active ? theme.colors.primary : theme.colors.white};
  }
`;

const RoutesItemLink = styled(Link)`
  transition: 0.4s;
  color: ${theme.colors.white};
  font-family: "rg-standardbold", sans-serif;
  font-size: ${theme.size.md}px;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
