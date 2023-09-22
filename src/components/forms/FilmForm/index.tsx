import { FC, useRef } from "react";
import { useFormik } from "formik";

import { createFilm } from "store/films";
import { useOutsideClick } from "hooks/useOutsideClick";
import styles from "components/Forms/FilmForm/styles.module.css";

type Props = {
  onClose: () => void;
};

export const FilmForm: FC<Props> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClose);

  const { setFieldValue, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      client: "",
      event: "",
      description: "",
      vimeo: "https://player.vimeo.com/video/732441603?h=c390550b24",
      previewImg: null,
    },
    onSubmit: (values) => {
      createFilm(values);
      onClose();
    },
  });

  return (
    <div className={styles.form} ref={modalRef}>
      <form onSubmit={handleSubmit}>
        <label>
          Название ролика
          <input
            className={styles.input}
            value={values.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Название компании клиента
          <input
            className={styles.input}
            value={values.client}
            name="client"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Название события
          <input
            className={styles.input}
            value={values.event}
            name="event"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          О ролике
          <input
            className={styles.input}
            value={values.description}
            name="description"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Ссылка на ролик vimeo
          <input
            className={styles.input}
            placeholder="https://player.vimeo.com/video/732441603?h=c390550b24"
            value={values.vimeo}
            name="vimeo"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Загрузить превью фото
          <input
            accept="image/*"
            className={styles.input}
            name="previewImg"
            type="file"
            onChange={(e) => {
              if (e.currentTarget.files) {
                setFieldValue("previewImg", e.currentTarget.files[0]);
              }
            }}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
