import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { theme } from "variables";

interface Props {
  path: string;
  name: string;
  active: boolean;
}

export const NavItem: FC<Props> = ({ path, name }) => {
  return (
    <RoutesItem>
      <RoutesItemLink to={path}>{name}</RoutesItemLink>
    </RoutesItem>
  );
};
const RoutesItem = styled.li`
  margin-bottom: 8px;
`;

const RoutesItemLink = styled(Link)`
  transition: 0.4s;
  color: ${theme.colors.white};
  font-family: "opensans_bold", sans-serif;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
