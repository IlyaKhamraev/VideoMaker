import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useStore } from "effector-react";

import { Wrapper } from "components/Wrapper";
import styles from "components/FilmsList/Film/styles.module.css";
import { $films } from "store/films";

export const Film = () => {
  const { id } = useParams();
  const { films } = useStore($films);

  const film = films.find((el) => el._id === id);

  // if (loadingGetFilm) {
  //   return <div>loading</div>;
  // }

  return (
    <Wrapper>
      <div className={styles.film}>
        <div className={styles.video}>
          <iframe
            title="video"
            className={styles.frame}
            src={film && film.vimeo}
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
          {film && film.event && (
            <p className={styles.category}>{film.event}</p>
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
