import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStore } from "effector-react";

import { $access } from "src/store/access";
import { NavItem } from "src/components/Navbar/NavItem";
import { paths } from "src/components/Navbar/constants";
import { Social } from "src/components/Social";
import { Routes } from "src/helpers/routes";

import styles from "src/components/Navbar/styles.module.css";

export const Navbar = () => {
  const { isAuthenticated } = useStore($access);

  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link className={styles.logo} to={Routes.Main}>
            r.raudsepp
          </Link>
        </div>
        <nav>
          <ul>
            {paths
              .filter(
                ({ onlyAdmin }) => onlyAdmin === isAuthenticated || !onlyAdmin
              )
              .map((route) => (
                <NavItem
                  {...route}
                  key={route.name}
                  active={location.pathname === route.path}
                />
              ))}
          </ul>
          <Social />
        </nav>
      </div>
    </div>
  );
};
