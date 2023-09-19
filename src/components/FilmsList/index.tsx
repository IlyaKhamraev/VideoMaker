import { useStore } from "effector-react";

import { FilmItem } from "components/FilmsList/FilmItem";
import { Wrapper } from "components/Wrapper";

import { $films } from "store/films";

import styles from "components/FilmsList/styles.module.css";

export const FilmsList = () => {
  const { films } = useStore($films);

  return (
    <Wrapper>
      <ul className={styles.list}>
        {films.map((film) => (
          <FilmItem key={film._id} {...film} />
        ))}
      </ul>
    </Wrapper>
  );
};
