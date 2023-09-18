import { FC, ReactNode } from "react";

import styles from "components/Modal/styles.module.css";

interface Props {
  children: ReactNode;
}

export const Modal: FC<Props> = ({ children }) => (
  <div className={styles.modal}>{children}</div>
);
