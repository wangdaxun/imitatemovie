import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './AboutMovie.scss';

const AboutMovie =({ name,number })=>{
  return(
    <div className="About">
      <div className="About__text">{name}</div>
      <div className="About__number">
        {number}<span></span>
      </div>
    </div>
  )
};
AboutMovie.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default AboutMovie;
