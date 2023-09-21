import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useStore } from "effector-react";
import { useState } from "react";

import { Wrapper } from "components/Wrapper";
import { $films } from "store/films";

import styles from "components/FilmsList/Film/styles.module.css";

export const Film = () => {
  const [isLoadFrame, setIsLoadFrame] = useState(true);

  const { id } = useParams();
  const { films } = useStore($films);

  const film = films.find((el) => el._id === id);

  return (
    <Wrapper>
      <div
        className={classNames(styles.film, {
          [styles.loding]: film?.vimeo && isLoadFrame,
        })}
      >
        <div className={styles.video}>
          <iframe
            onLoad={() => setIsLoadFrame(false)}
            title="video"
            className={styles.frame}
            src={film && film.vimeo}
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="none"
            allowFullScreen
          />
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
          <div className={classNames(styles.padding, styles.mb12)}>
            <p className={styles.description}>{film.description}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
