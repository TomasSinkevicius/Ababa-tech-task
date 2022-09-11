import React, { useEffect } from "react";
import styles from "../login/login.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { FadeAnimation } from "../../components/fade-animation";

interface User {
  username: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { isValid },
  } = useForm<User>({ mode: "onChange" });

  const { signup, isLoading, errorMsg } = useAuth();

  const onSubmit = async (data: User): Promise<void> => {
    signup(data);
  };

  useEffect(() => {
    setFocus("username");
  }, []);

  return (
    <>
      <div className={styles.container}>
        <FadeAnimation>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles["form__heading"]}>Register</h1>

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
              placeholder="Tomas"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <label className={styles["form__label"]}>Confirm password</label>
            <input
              className={styles["form__input"]}
              placeholder="Tomas"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            <button
              className={styles["form__button"]}
              type="submit"
              disabled={!isValid}
            >
              {isLoading ? <span>Loading...</span> : <span>REGISTER</span>}
            </button>

            <span>
              Or{" "}
              <Link to="/login" className={styles["sign-up-link"]}>
                login
              </Link>
            </span>
          </form>
        </FadeAnimation>
      </div>
    </>
  );
};
