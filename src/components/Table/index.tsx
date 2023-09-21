import { FC, MouseEvent } from "react";

import { Film } from "types";
import { FaEdit, FaTrash } from "react-icons/fa";

import styles from "components/Table/styles.module.css";

type Props = {
  items: Film[];
};

export const Table: FC<Props> = ({ items }) => {
  const handleClickEdit = (e: MouseEvent<HTMLElement>) => {};
  const handleClickRemove = (e: MouseEvent<HTMLElement>) => {};

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Client</th>
            <th>Event</th>
            <th>Discription</th>
            <th>Vimeo</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.client}</td>
              <td>{row.event}</td>
              <td>{row.description}</td>
              <td>
                <a target="_blank" href={row.vimeo}>
                  {row.vimeo}
                </a>
              </td>
              <td>
                <img src={row.previewImg} alt="preview" loading="lazy" />
              </td>
              <td>
                <div className={styles.actions}>
                  <button
                    className={styles.actionBtn}
                    title="edit"
                    onClick={handleClickEdit}
                  >
                    Edit <FaEdit className={styles.icon} />
                  </button>
                  <button
                    className={styles.actionBtn}
                    title="edit"
                    onClick={handleClickRemove}
                  >
                    Remove <FaTrash className={styles.icon} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
