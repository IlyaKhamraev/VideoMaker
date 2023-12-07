import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { FaPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { FilmForm } from "src/components/Forms/FilmForm";
import { Modal } from "src/components/Modal";
import { Table } from "src/components/Table";
import { logout } from "src/store/access";
import { $films } from "src/store/films";
import { Routes } from "src/helpers/routes";

import styles from "src/components/Dashboard/styles.module.css";

export const Dashboard: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { films } = useStore($films);

  const toggleModal = () => setShowModal(!showModal);

  const getLogout = () => logout();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <div>
                <Link className={styles.navLink} to={Routes.Main}>
                  На главную
                </Link>
              </div>
              <div>
                <button className={styles.logout} onClick={getLogout}>
                  Выйти <FiLogOut className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.tabs}>
              <button onClick={toggleModal} className={styles.tab}>
                <FaPlus className={styles.icon} /> Добавить ролик
              </button>
            </div>
            <div>
              <Table items={films} />
            </div>
          </div>
        </div>
      </div>
      {showModal &&
        createPortal(
          <Modal children={<FilmForm onClose={toggleModal} />} />,
          document.body
        )}
    </>
  );
};
