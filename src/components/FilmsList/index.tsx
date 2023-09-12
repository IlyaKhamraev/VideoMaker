import { styled } from "styled-components";
import { useStore } from "effector-react";

import { FilmItem } from "components/FilmsList/FilmItem";
// import { films } from "components/FilmsList/constants";
import { Wrapper } from "components/Wrapper";
import { $films } from "store/films";

export const FilmsList = () => {
  const { films } = useStore($films);

  if (!films) {
    return <div>loading</div>;
  }
  return (
    <Wrapper>
      <List>
        {films.map((film) => (
          //@ts-ignore
          <FilmItem key={film._id} {...film} />
        ))}
      </List>
    </Wrapper>
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
