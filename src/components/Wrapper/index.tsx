import { FC } from "react";

import { Navbar } from "src/components/Navbar";

import styles from "src/components/Wrapper/styles.module.css";

type Props = {
  children: JSX.Element;
};

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.alignBlock}>{children}</div>
      </div>
    </>
  );
};
