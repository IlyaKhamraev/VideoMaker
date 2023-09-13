// import { useStore } from "effector-react";

import { FilmItem } from "components/FilmsList/FilmItem";
import { films } from "components/FilmsList/constants";
import { Wrapper } from "components/Wrapper";
// import { $films } from "store/films";

import styles from "components/FilmsList/styles.module.css";

export const FilmsList = () => {
  return (
    <Wrapper>
      <ul className={styles.list}>
        {films.map((film) => (
          <FilmItem key={film.id} {...film} />
        ))}
      </ul>
    </Wrapper>
  );
};
