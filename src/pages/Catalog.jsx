import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";
import MovieGrid from "../components/movie-grid/MovieGrid";
import {category as cate } from "../api/tmdbApi";

const Catalog = () => {
  const { category } = useParams();

  return (
    <div>
      <PageHeader>
      {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="moviegrid__container container">
        <MovieGrid category={category}/>
      </div>
    </div>
  );
};

export default Catalog;
