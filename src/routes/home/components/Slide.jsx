import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './Slide.scss';
const PosterSlide = ({ data }) =>{
    const settings = {
      dots: true,
      autoplay: true,
      className: 'posterSlide',
      dotsClass: 'posterSlide__dots'
    };
    return (
      <Slider {...settings}>
        {
          data.map(item => (
            <div className="posterSlide__img" key={item.image}>
              <img src={item.image}></img>
            </div>
          ))
        }
      </Slider>
    );
};

PosterSlide.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PosterSlide;
