import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "components/Navbar/NavItem/styles.module.css";

interface Props {
  path: string;
  name: string;
  active: boolean;
}

export const NavItem: FC<Props> = ({ path, name, active }) => {
  return (
    <div className={classNames(styles.navItem, { active: active })}>
      <Link className={styles.navItemLink} to={path}>
        {name}
      </Link>
    </div>
  );
};
