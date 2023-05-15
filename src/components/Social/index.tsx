import { styled } from "styled-components";

import { social } from "components/Social/constants";
import { ListItem } from "components/Social/Item";

export const Social = () => (
  <List>
    {social.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </List>
);

export const List = styled.ul`
  display: flex;
  margin-bottom: 0;
  align-items: stretch;
  margin-top: 80px;
`;
