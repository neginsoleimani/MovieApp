import React from 'react'
import HeroSlide from '../components/hero-slide/HeroSlide'
import {Link} from 'react-router-dom'
import Button,{OutlineButton} from '../components/button/Button'
import MovieList from '../components/movie-list/MovieList'
import {category,movieType,tvType}from '../api/tmdbApi'

const Home = () => {
  return (
    <>
    <HeroSlide/>
    <div className="container">
      {/* popular */}
      <div className="section">
        <div className="section__header">
          <h3><i class='bx bx-minus'></i> Tranding Movie</h3>
          <Link to="/movie">
            <Button className="small"><i class='bx bx-dots-horizontal-rounded'></i> </Button>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.popular}/>
      </div>
      {/* top rated */}
      <div className="section">
        <div className="section__header">
          <h3><i class='bx bx-minus'></i> Top Rated Movie</h3>
          <Link to="/movie">
            <Button className="small"><i class='bx bx-dots-horizontal-rounded'></i></Button>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated}/>
      </div>
      {/* tranding tv */}
      <div className="section">
        <div className="section__header">
          <h3><i class='bx bx-minus'></i> Tranding Tv</h3>
          <Link to="/movie">
            <Button className="small"><i class='bx bx-dots-horizontal-rounded'></i></Button>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular}/>
      </div>
      {/* top rated tv */}
      <div className="section" style={{marginBottom:100}}>
        <div className="section__header">
          <h3><i class='bx bx-minus'></i> Top Rated Tv</h3>
          <Link to="/movie">
            <Button className="small"><i class='bx bx-dots-horizontal-rounded'></i></Button>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </div>
    </>
  )
}

export default Home