import { FC, useState, ChangeEvent, useRef } from "react";

import { useOutsideClick } from "hooks/useOutsideClick";
import styles from "components/forms/FilmForm/styles.module.css";

interface FormValues {
  name: string;
  nameCompany: string;
  nameEvent: string;
  about: string;
  link: string;
  previewImg: File | null;
}

const initialState: FormValues = {
  name: "",
  nameCompany: "",
  nameEvent: "",
  about: "",
  link: "",
  previewImg: null,
};

const isCheckEmptyValues = (obj: FormValues) => {
  const values = Object.values(obj);

  return values.some((value) => value !== "");
};

type Props = {
  onClose: () => void;
};

export const FilmForm: FC<Props> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClose);

  const [form, setForm] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, previewImg: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    if (!isCheckEmptyValues(form)) {
      return;
    }
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
        Название компании
        <input
          className={styles.input}
          value={form.nameCompany}
          name="nameCompany"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Название события
        <input
          className={styles.input}
          value={form.nameEvent}
          name="nameEvent"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        О ролике
        <input
          className={styles.input}
          value={form.about}
          name="about"
          type="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Ссылка на ролик vimeo
        <input
          className={styles.input}
          placeholder="https://player.vimeo.com/video/732441603?h=c390550b24"
          value={form.link}
          name="link"
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
