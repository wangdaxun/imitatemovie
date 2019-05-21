import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieItem.scss';
import PosterSlide from "./Slide";
const MovieItem=({movie})=>{
  return (
    <div className="movieItem">
      <div className="movieItem__poster">
        <img src={movie.poster}></img>
      </div>
      <div className="movieItem__content">
        <div className="movieItem__name">{movie.name}</div>
        <div className="movieItem__score">
          观众评分
          <span>{movie.score}</span>
        </div>
        <div className="movieItem__director">
          导演：&nbsp;{movie.director}
        </div>
        <div className="movieItem__actor">
          主演：{movie.actor}
        </div>
        <div className="movieItem__tag">
          {
            movie.tags.map((tag, i)=> {
              if(i%2){
                return <div className="tTag tTag--blue" key={tag}>{tag}</div>
              }
              return <div className="tTag tTag--red" key={tag}>{tag}</div>
            })
          }
        </div>
      </div>
      <div className="movieItem__btn">
        <Link to="/detail" className="tBtn">购票</Link>
        <span>9.9元起</span>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieItem;
