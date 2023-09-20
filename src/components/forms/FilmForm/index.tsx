import { FC, useState, ChangeEvent, useRef, FormEvent } from "react";
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
};

type Props = {
  onClose: () => void;
};

export const FilmForm: FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState<FilmFormType>(initialState);
  const [file, setFile] = useState();

  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClose);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;

    if (files?.length) {
      //@ts-ignore
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    //@ts-ignore
    formData.append("file", file);

    Object.keys(form).forEach((el) => {
      //@ts-ignore
      formData.append(el, form[el]);
    });

    console.log(formData);

    createFilm(formData).then((el) => {
      if (el.status === 200) {
        onClose();
      }
    });
    // if (!isCheckEmptyValues(form)) {
    //   return;
    // }
  };

  return (
    <div className={styles.form} ref={modalRef}>
      <form onSubmit={handleSubmit} noValidate>
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
            accept="image/*"
            className={styles.input}
            name="previewImg"
            type="file"
            onChange={handleChangeFile}
          />
        </label>
        <button>Отправить</button>
      </form>
    </div>
  );
};
