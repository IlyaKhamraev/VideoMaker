import { FC, useState, ChangeEvent, useRef } from "react";
import { createFilm } from "store/films";

import { FilmFormType } from "types";
import { useOutsideClick } from "hooks/useOutsideClick";
import styles from "components/forms/FilmForm/styles.module.css";

const initialState: FilmFormType = {
  name: "",
  client: "",
  event: "",
  description: "",
  vimeo: "",
  previewImg: null,
};

const isCheckEmptyValues = (obj: FilmFormType) => {
  const values = Object.values(obj);

  return values.some((value) => value !== "");
};

type Props = {
  onClose: () => void;
};

export const FilmForm: FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState(initialState);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClose);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, previewImg: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    createFilm(form).then((el) => {
      if (el.status === 200) {
        onClose();
      }
    });
    // if (!isCheckEmptyValues(form)) {
    //   return;
    // }
  };

  return (
    <div ref={modalRef} className={styles.form}>
      <label>
        Название ролика
        <input
          className={styles.input}
          value={form.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Название компании клиента
        <input
          className={styles.input}
          value={form.client}
          name="client"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Название события
        <input
          className={styles.input}
          value={form.event}
          name="event"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        О ролике
        <input
          className={styles.input}
          value={form.description}
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
          value={form.vimeo}
          name="vimeo"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Загрузить превью фото
        <input
          className={styles.input}
          name="previewImg"
          type="file"
          onChange={handleChangeFile}
        />
      </label>
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
};
