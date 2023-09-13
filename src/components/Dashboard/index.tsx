import { FC, useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { logout } from "store/access";

import styles from "components/Dashboard/styles.module.css";
interface FormValues {
  name: string;
  nameCompany: string;
  nameEvent: string;
  about: string;
  link: string;
}

const initialState: FormValues = {
  name: "",
  nameCompany: "",
  nameEvent: "",
  about: "",
  link: "",
};

const isCheckEmptyValues = (obj: FormValues) => {
  const values = Object.values(obj);

  return values.some((value) => value !== "");
};

export const Dashboard: FC = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCheckEmptyValues(form)) {
      return;
    }

    if (!file) {
      return;
    }
  };

  const getLogout = () => {
    logout();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <div>
          <Link to="/">На главную</Link>
        </div>
        <div>
          <button onClick={getLogout}>Выйти</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Название ролика
              <input
                value={form.name}
                name="name"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              Название компании
              <input
                value={form.nameCompany}
                name="nameCompany"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              Название события
              <input
                value={form.nameEvent}
                name="nameEvent"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              О ролике
              <input
                value={form.about}
                name="about"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              Ссылка на ролик
              <input
                value={form.link}
                name="link"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              Загрузить превью
              <input name="preview" type="file" onChange={handleChangeFile} />
            </label>
            <button>Отправить</button>
          </form>
        </div>

        {/* <Table>
          <caption>Our Client Data</caption>
          <tr>
            <th>Id</th>
            <th>Для какой компании</th>
            <th>Название</th>
            <th>Событие</th>
            <th>О ролике</th>
            <th>Превью</th>
            <th>Ссылка на ролик</th>
            <th>Управление</th>
          </tr>
        </Table> */}
      </div>
    </div>
  );
};
