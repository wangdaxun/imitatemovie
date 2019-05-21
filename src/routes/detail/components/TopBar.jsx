import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./TopBar.scss";

const TopBar =({onShowImage}) =>{
  return(
    <div className="top">
      <div className="top__name">从你的全世界路过</div>
      <div className="top__subname">I BELONGED TO YOU</div>
      <div className="top__message">爱情&nbsp;/&nbsp;文艺&nbsp;/&nbsp;喜剧</div>
      <div className="top__message">重庆&nbsp;|&nbsp;113分钟</div>
      <div className="top__message">2016-09-30&nbsp;在中国大陆上映<span className="rsj"></span></div>
      <div className="img">
        <img src="../source/movie/cndqsjlg.jpg" onClick={onShowImage}/>
      </div>
    </div>
  )
};

TopBar.propTypes = {
  onShowImage:PropTypes.func.isRequired
};
export default  TopBar;
