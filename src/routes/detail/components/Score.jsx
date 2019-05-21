import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./Score.scss";
import Star from "../../../../src/components/Star"

const Score =({}) =>{
  return(
    <div className="Score">
      <div className="Score__content">
        <div className="Score__item">
          <div className="Score__item--value">
            <div className="Sc">9.3</div>
            <Star value={9.3} size={16}/>
          </div>
          <div className="Score__item--title">观众评分279,337人</div>
        </div>
        <div className="Score__item">
          <div className="Score__item--value">83%</div>
          <div className="Score__item--title">v淘推荐度</div>
        </div>
        <div className="Score__item">
          <div className="Score__item--value">71787</div>
          <div className="Score__item--title">想看人数</div>
        </div>
      </div>
        <div className="Score__bt">
          <div className="Score__btn">
            <i className="Score__btn--icon Score__btn--want"></i>
            <div className="Score__btn--text">想看</div>
          </div>
          <div className="Score__btn">
            <i className="Score__btn--icon Score__btn--star"></i>
            <div className="Score__btn--text">看过</div>
          </div>
        </div>
    </div>
  )
}


export default  Score;
