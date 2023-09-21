import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

import { Routes } from "helpers/routes";

import styles from "components/Register/styles.module.css";

export const Register = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.password === formValue.confirmPassword) {
      console.log("отправить");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Username:
            <input
              className={styles.input}
              type="text"
              value={formValue.username}
              name="username"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              className={styles.input}
              type="text"
              value={formValue.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              className={styles.input}
              type="text"
              value={formValue.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Confirm Password:
            <input
              className={styles.input}
              type="text"
              value={formValue.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </label>

          <button>Sign up</button>
        </form>
        <div className={styles.note}>
          Already a memeber? <Link to={Routes.Login}>Login in here</Link>
        </div>
      </div>
    </div>
  );
};
