import { styled } from "styled-components";

import { Film } from "components/Films/Film";

export const Films = () => {
  return (
    <List>
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
    </List>
  );
};

const List = styled.ul`
  display: grid;
  justify-items: stretch;
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 3vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;
