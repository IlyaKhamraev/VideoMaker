import { useStore } from "effector-react";

import { FilmItem } from "components/FilmsList/FilmItem";
import { Wrapper } from "components/Wrapper";
import { Loader } from "components/Loader";
import { $films } from "store/films";

import styles from "components/FilmsList/styles.module.css";

export const FilmsList = () => {
  const { films, isLoading } = useStore($films);

  const content = isLoading ? (
    <div className={styles.lodingBox}>
      <Loader />
    </div>
  ) : (
    <ul className={styles.list}>
      {films.map((film) => (
        <FilmItem key={film._id} {...film} />
      ))}
    </ul>
  );

  return <Wrapper>{content}</Wrapper>;
};
