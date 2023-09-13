import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { FilmForm } from "components/forms/FilmForm";
import { Modal } from "components/Modal";
import { logout } from "store/access";

import styles from "components/Dashboard/styles.module.css";

export const Dashboard: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const getLogout = () => logout();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <div>
                <Link className={styles.navLink} to="/">
                  На главную
                </Link>
              </div>
              <div>
                <button className={styles.logout} onClick={getLogout}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.tabs}>
              <button onClick={toggleModal} className={styles.tab}>
                Добавить ролик
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal &&
        createPortal(
          <Modal onClose={toggleModal} children={<FilmForm />} />,
          document.body
        )}
    </>
  );
};
