import { FC } from "react";

import styles from "src/components/Social/Item/styles.module.css";
type Props = {
  icon: JSX.Element;
  path: string;
  name: string;
  id: number;
};

export const ListItem: FC<Props> = ({ icon, path }) => (
  <li className={styles.wrapper}>
    <a className={styles.link} href={path} target="_blank" rel="noreferrer">
      {icon}
    </a>
  </li>
);
