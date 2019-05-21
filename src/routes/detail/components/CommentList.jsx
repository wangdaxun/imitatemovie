import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CollapsibleText from "./CollapsibleText"
import "./CommentList.scss";
import Star from "../../../../src/components/Star";
const CommentList = ({list, onClickZan}) =>{
  return(
    <ul className="CommentList">
      {list.map(item=>(
        <li>
          <div className="commentItem">
            <div className="commentItem__top">
              <div className="commentItem__top--face" style={{backgroundImage: 'url(/source/user/face.jpeg)'}}></div>
              <div className="commentItem__use">
                <div className="commentItem__top--user">{item.name}</div>
                <Star size={14} value={9.0}/>
              </div>
              <div className="commentItem__top--ellipsis"></div>
            </div>
            <div className="commentItem__content">
              <CollapsibleText height={84}>
                <div className="commentItem__content--overview">
                  {item.content}
                </div>
              </CollapsibleText>
            </div>
            <div className="commentItem__bottom">
              <div className="commentItem__bottom--time">{item.time}</div>
              <div className="commentItem__bottom--assist">
                <i className={`${item.isZan && 'active'}`} onClick={()=>onClickZan(item.id)}></i>
                <span>{item.zan}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
};

CommentList.propTypes = {
  list: PropTypes.array.isRequired,
  onClickZan: PropTypes.func.isRequired
}
export default CommentList;
