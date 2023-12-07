import { FC } from "react";

import styles from "src/components/Container/styles.module.css";

type Props = {
  children: JSX.Element;
};

export const Container: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
