import { LoginForm } from "src/components/Forms/LoginForm";

import styles from "src/components/Login/styles.module.css";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <LoginForm />
      </div>
    </div>
  );
};
