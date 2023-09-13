import { FC, ReactNode } from "react";

import styles from "components/Modal/styles.module.css";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};
