import { useParams } from "react-router-dom";
import classNames from "classnames";

import { Wrapper } from "components/Wrapper";
import styles from "components/FilmsList/Film/styles.module.css";
import { films } from "components/FilmsList/constants";

export const Film = () => {
  const { id } = useParams();

  const film = films.find((film) => film.id === Number(id));

  return (
    <Wrapper>
      <div className={styles.film}>
        <div className={styles.video}>
          <iframe
            title="video"
            className={styles.frame}
            src={film && film.video}
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="none"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className={classNames(
            styles.borderBottom,
            styles.padding,
            styles.mb12
          )}
        >
          {film && film.client && (
            <p className={styles.client}>{film.client}</p>
          )}
          {film && film.name && <p className={styles.name}>{film.name}</p>}
          {film && film.category && (
            <p className={styles.category}>{film.category}</p>
          )}
        </div>
        {film && film.description && (
          <div
            className={classNames(
              styles.borderBottom,
              styles.padding,
              styles.mb12
            )}
          >
            <p className={styles.description}>{film.description}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
