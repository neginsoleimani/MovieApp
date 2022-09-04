import React from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/ApiConfig";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link} className="movie__card-box">
      <div className="movie__card" style={{ backgroundImage: `url(${bg})` }}>
        <Button className="crad__btn">
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h4>{item.title || item.name}</h4>
    </Link>
  );
};

export default MovieCard;
