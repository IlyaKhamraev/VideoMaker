import { FC } from "react";
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";

import styles from "components/FilmsList/FilmItem/styles.module.css";

interface Props {
  id: number;
  promoImg: string;
  client: string;
  name: string;
  category: string;
}

export const FilmItem: FC<Props> = ({
  id,
  promoImg,
  client,
  name,
  category,
}) => (
  <li className={styles.wrapper}>
    <Link className={styles.linkWrapper} to={`film/${id}`}>
      <div className={styles.filmImg}>
        <img className={styles.img} src={promoImg} alt="promo" />

        <Link className={styles.playLink} to={`film/${id}`}>
          <span className={styles.play}>
            <GiPlayButton />
          </span>
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.client}>{client}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </Link>
  </li>
);
