import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './TopBar.scss';
const TopBar =({ city , showCityLayer}) =>{
  return(
    /*
    命名规则
    B:Block
    E:Element
    M:Modifier
     */
   <div className="TopBar">
     <div className="TopBar__City" onClick={showCityLayer}>
       {city}
     </div>
     <div className="TopBar__Search">
       <input type="text"/>
     </div>
     <div className="TopBar__Scan">
     </div>
   </div>
  );
};

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCityLayer: PropTypes.func.isRequired
}

export default TopBar;
