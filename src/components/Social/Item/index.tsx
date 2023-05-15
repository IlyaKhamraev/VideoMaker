import { FC } from "react";
import { styled } from "styled-components";

import { theme } from "variables";

interface Props {
  icon: JSX.Element;
  path: string;
  name: string;
  id: number;
}

export const ListItem: FC<Props> = ({ icon, path }) => (
  <Wrapper>
    <Link href={path} target="_blank">
      {icon}
    </Link>
  </Wrapper>
);

export const Wrapper = styled.li`
  margin-right: ${theme.spacing.md}px;
`;

export const Link = styled.a`
  transition: 0.4s;
  font-size: ${theme.size.md}px;
  color: var(--white-color);
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;
