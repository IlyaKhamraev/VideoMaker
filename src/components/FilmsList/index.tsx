import { useStore } from "effector-react";

import { FilmItem } from "src/components/FilmsList/FilmItem";
import { Wrapper } from "src/components/Wrapper";
import { Loader } from "src/components/Loader";
import { $films } from "src/store/films";

import styles from "src/components/FilmsList/styles.module.css";

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
