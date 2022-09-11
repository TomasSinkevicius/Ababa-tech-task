import React from "react";
import styles from "./header.module.scss";
import { logOut } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { ReactComponent as LogoutSvg } from "../../../assets/logout.svg";

export const Header = () => {
  const dispatch = useDispatch();

  const cookies = new Cookies();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles["header__button"]}
          onClick={() => {
            cookies.remove("token");
            dispatch(logOut());
          }}
        >
          <LogoutSvg /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
