import React, { useEffect } from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { FadeAnimation } from "../../components/fade-animation/fade-animation";

interface User {
  username: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isValid },
  } = useForm<User>({ mode: "onChange" });

  const { signin, isLoading, errorMsg } = useAuth();

  const onSubmit = async (data: User): Promise<void> => {
    signin(data);
  };

  useEffect(() => {
    setFocus("username");
  }, []);

  return (
    <>
      <section className={styles.container}>
        <FadeAnimation>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles["form__heading"]}>Login</h1>

            {errorMsg && <p className={styles["form__error"]}>{errorMsg}</p>}

            <label className={styles["form__label"]}>Username</label>
            <input
              className={styles["form__input"]}
              placeholder="Tomas"
              type="text"
              {...register("username", { required: true })}
            />

            <label className={styles["form__label"]}>Password</label>
            <input
              className={styles["form__input"]}
              placeholder="12345"
              type="password"
              {...register("password", { required: true })}
            />

            <button
              className={styles["form__button"]}
              type="submit"
              disabled={!isValid}
            >
              {isLoading ? <span>Loading...</span> : <span>LOGIN</span>}
            </button>

            <span>
              Or{" "}
              <Link to="/register" className={styles["sign-up-link"]}>
                sign up
              </Link>
            </span>
          </form>
        </FadeAnimation>
      </section>
    </>
  );
};
