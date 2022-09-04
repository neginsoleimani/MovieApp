import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/ApiConfig";
import MovieCard from "../movie-card/MovieCard";
import "./movielist.css";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="movie__list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide>
            <MovieCard  item={item} category={props.category}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default MovieList;
