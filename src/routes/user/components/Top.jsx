import React,{Component} from 'react';
import "./Top.scss";
import PropTypes from 'prop-types';
import TabMenu from "../../../components/TabMenu";
const Top =( {name} ) =>{
  return(
    <div className="uTop">
      <div className="tOperator">
        <div className="tOperator__icon tOperator__icon--settings"></div>
        <div className="tOperator__icon tOperator__icon--message"></div>
      </div>
      <div className="uTop__content">
        <div className="uTop__face"></div>
        <div className="uTop__subtance">
          <div className="name">{name}</div>
          <div className="follow">
            <div className="follow--show">关注&nbsp;0</div>
            <div className="follow--showed">被关注&nbsp;0</div>
          </div>
          <div className="uTop__level">黑钻会员</div>
        </div>
      </div>
    </div>
  )
};

Top.propTypes = {
  name: PropTypes.string.isRequired
};
export default Top;
