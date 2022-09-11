import React from "react";
import { IMovie } from "../interfaces/movie.interface";
import styles from "./modal.module.scss";

interface Props {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalVisible: boolean;
  data: IMovie;
}

export const Modal = ({ setIsModalVisible, isModalVisible, data }: Props) => {
  const {
    title,
    releaseYear,
    runtime,
    genre,
    description,
    trailer,
    moreInformation,
  } = data;

  return isModalVisible ? (
    <div className={styles.modal}>
      <button onClick={() => setIsModalVisible(false)}>✘</button>
      <div>
        <div className={styles["modal_right"]}>
          <h1>{title}</h1>
          <div className={styles["modal_right__details"]}>
            <ul>
              <li>{releaseYear}</li>
              <li>{runtime} min</li>
              <li>{genre}</li>
            </ul>
          </div>
          <div className={styles["modal_right__description"]}>
            <p>{description}</p>
            <a target="_blank" rel="noreferrer" href={moreInformation}>
              Read more
            </a>
            <div className={styles["modal_right__link"]}>
              <a
                target="_blank"
                rel="noreferrer"
                href={trailer}
                className={styles["modal_right__button"]}
              >
                Watch trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
