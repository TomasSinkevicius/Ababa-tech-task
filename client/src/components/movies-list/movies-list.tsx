import React, { useState } from "react";
import { IMovie } from "../interfaces/movie.interface";
import { Modal } from "../modal";
import { MovieCard } from "../movie-card";
import { moviesData } from "./movies-data";
import styles from "./movies-list.module.scss";

const initialValues = {
  title: "",
  description: "",
  releaseYear: 0,
  runtime: 0,
  genre: "",
  trailer: "",
  image: "",
  moreInformation: "",
};

export const MoviesList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeMovie, setActiveMovie] = useState<IMovie>(initialValues);

  const movies = moviesData;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.movies}>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                setIsModalVisible={setIsModalVisible}
                setActiveMovie={setActiveMovie}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        data={activeMovie}
      />
    </>
  );
};
