import { useFormik } from "formik";

import { login } from "src/store/access";

import styles from "src/components/Forms/LoginForm/styles.module.css";

export const LoginForm = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => login(values),
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.label}>
        Email:
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password:
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <button className={styles.submit}>Submit</button>
    </form>
  );
};
