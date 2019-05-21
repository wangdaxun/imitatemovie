import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './ScoreDistribute.scss';
import Star from "../../../../src/components/Star"

const ScoreDistruibute = () =>{
  return(

    <div className="scoreDistribute">
      <div className="title">观众热评</div>
      <div className="content">
        <div className="score">
          <div className="score__title">9.3</div>
          <div className="score__people">280,411人评</div>
        </div>
        <div className="distribute">
          <div>
            <div className="distribute__item">
              <Star size={14} value={10}/>
              <div className="distribute__pro">
                  <div className="distribute__top" style={{width:`80%`}}></div>
              </div>
            </div>
            <div className="distribute__item">
              <Star size={14} value={8}/>
              <div className="distribute__pro">
                <div className="distribute__top" style={{width:`10%`}}></div>
              </div>
            </div>
            <div className="distribute__item">
              <Star size={14} value={6}/>
              <div className="distribute__pro">
                <div className="distribute__top" style={{width:`5%`}}></div>
              </div>
            </div>
            <div className="distribute__item">
              <Star size={14} value={4}/>
              <div className="distribute__pro">
                <div className="distribute__top"  style={{width:`3%`}}></div>
              </div>
            </div>
            <div className="distribute__item">
              <Star size={14} value={2}/>
              <div className="distribute__pro">
                <div className="distribute__top"  style={{width:`2%`}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ScoreDistruibute;
