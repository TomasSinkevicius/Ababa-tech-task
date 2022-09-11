import React from "react";
import { Header } from "../../components/layout/header";
import { MoviesList } from "../../components/movies-list";

export const Home = () => {
  return (
    <>
      <Header />
      <MoviesList />
    </>
  );
};
