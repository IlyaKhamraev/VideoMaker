import { FC } from "react";
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";

import { Film } from "src/types";

import styles from "src/components/FilmsList/FilmItem/styles.module.css";

import plugImg from "src/assets/images/plug_img.png";

export const FilmItem: FC<Film> = ({
  _id,
  previewImg,
  client,
  name,
  event,
}) => (
  <li className={styles.wrapper}>
    <Link className={styles.linkWrapper} to={`film/${_id}`}>
      <div className={styles.filmImg}>
        <img
          className={styles.img}
          src={previewImg ?? plugImg}
          alt="promo"
          loading="lazy"
        />

        <span className={styles.playLink}>
          <span className={styles.play}>
            <GiPlayButton />
          </span>
        </span>
      </div>
      <div className={styles.content}>
        <p className={styles.client}>{client}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{event}</p>
      </div>
    </Link>
  </li>
);
