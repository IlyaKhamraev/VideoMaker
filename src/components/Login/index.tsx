import { useState, ChangeEvent, FormEvent } from "react";

import { login } from "store/access";

import styles from "components/Login/styles.module.css";

export const Login = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.email !== "" && formValue.password !== "") {
      login(formValue);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.label}>
            Email:
            <input
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              type="text"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};
