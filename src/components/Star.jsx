import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./Star.scss";

const Star = ({ value , size }) =>{
  const bgSize = `${size}px`;
  return(
    <div className="Star" style={{ height: size, width: size * 5, backgroudSize: bgSize}}>
      <div className="StarTop" style={{ width: `${value * 10}%`, backgroundSize: bgSize}}>
      </div>
    </div>
  )
}

Star.propTypes = {
  value : PropTypes.number.isRequired,
  size : PropTypes.number.isRequired
}
export default Star;
