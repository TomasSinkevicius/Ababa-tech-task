import React from "react";
import { IMovie } from "../interfaces/movie.interface";
import styles from "./movie-card.module.scss";

type Props = {
  movie: IMovie;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMovie: React.Dispatch<React.SetStateAction<IMovie>>;
};

export const MovieCard = ({
  movie,
  setIsModalVisible,
  setActiveMovie,
}: Props) => {
  const {
    title,
    releaseYear,
    runtime,
    genre,
    description,
    trailer,
    image,
    moreInformation,
  } = movie;

  const onButtonClick = () => {
    setIsModalVisible(true);
    setActiveMovie(movie);
  };

  return (
    <div className={styles["movie-card"]}>
      <div className={styles["movie-card_left"]}>
        <img src={image} className={styles["movie-card_left__image"]} />
        <button
          onClick={onButtonClick}
          className={styles["movie-card_left__mobile-link"]}
        >
          <img src={image} />
        </button>
      </div>
      <div className={styles["movie-card_right"]}>
        <h1>{title}</h1>
        <div className={styles["movie-card_right__details"]}>
          <ul>
            <li>{releaseYear}</li>
            <li>{runtime} min</li>
            <li>{genre}</li>
          </ul>
        </div>
        <div className={styles["movie-card_right__description"]}>
          <p>{description}</p>
          <a target="_blank" rel="noreferrer" href={moreInformation}>
            Read more
          </a>
          <div className={styles["movie-card_right__link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href={trailer}
              className={styles["movie-card_right__button"]}
            >
              Watch trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
