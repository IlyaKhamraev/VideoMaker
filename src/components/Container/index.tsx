import { FC } from "react";

import styles from "components/Container/styles.module.css";

interface Props {
  children: JSX.Element;
}

export const Container: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
