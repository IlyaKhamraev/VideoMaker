import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "src/components/Navbar/NavItem/styles.module.css";

type Props = {
  path: string;
  name: string;
  active: boolean;
};

export const NavItem: FC<Props> = ({ path, name, active }) => (
  <div className={styles.navItem}>
    <Link
      className={classNames(styles.navItemLink, { [styles.active]: active })}
      to={path}
    >
      {name}
    </Link>
  </div>
);
