import { FC, ReactNode } from "react";

import styles from "components/Modal/styles.module.css";

type Props = {
  children: ReactNode;
};

export const Modal: FC<Props> = ({ children }) => (
  <div className={styles.modal}>{children}</div>
);
