import React, { useState, useEffect,useCallback  } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./moviegrid.css";
import MovieCard from "../movie-card/MovieCard";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import Input from "../input/Input";
import Button,{OutlineButton} from "../button/Button";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);


  
  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
        const params = {
            page: page + 1
        };
        switch(props.category) {
            case category.movie:
                response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                break;
            default:
                response = await tmdbApi.getTvList(tvType.popular, {params});
        }
    } else {
        const params = {
            page: page + 1,
            query: keyword
        }
        response = await tmdbApi.search(props.category, {params});
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
}

  return (
    <>
    <div className="search__input">
                <MovieSearch category={props.category} keyword={keyword}/>
      </div>
    <div className="movie__grid">
      {items.map((item, i) => (
        <MovieCard category={props.category} item={item} key={i} />
      ))}
    </div>
    {
                page < totalPage ? (
                    <div className="movie__grid-loadmore">
                        <Button onClick={loadMore} className="loadmore-btn">Load more <i class='bx bx-refresh'></i></Button>
                    </div>
                ) : null
            }
    </>
  );
};




const MovieSearch = props => {

  const history = useHistory();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

  const goToSearch = useCallback(
      () => {
          if (keyword.trim().length > 0) {
              history.push(`/${category[props.category]}/search/${keyword}`);
          }
      },
      [keyword, props.category, history]
  );

  useEffect(() => {
      const enterEvent = (e) => {
          e.preventDefault();
          if (e.keyCode === 13) {
              goToSearch();
          }
      }
      document.addEventListener('keyup', enterEvent);
      return () => {
          document.removeEventListener('keyup', enterEvent);
      };
  }, [keyword, goToSearch]);

  return (
      <div className="movie-search">
          <Input
              type="text"
              placeholder="search Movie"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
          />
          <Button  onClick={goToSearch} ><i class='bx bx-search-alt-2'></i></Button>
      </div>
  )
}

export default MovieGrid;
