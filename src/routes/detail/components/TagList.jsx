import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./TagList.scss"
const TagList =({tags,current,onClick}) =>{
  const onClickTag = (value)=>{
    if(value !== current){
      onClick(value);
    }
  };
  return(
    <div className="Tag">
      {tags.map(item=>(
        <span
          key={item.text}
          className={`${item.text===current ? 'Tag__item active' : 'Tag__item' }`}
          onClick={() => onClickTag(item.text)}
        >
          {item.text}&nbsp;{item.count}
        </span>
      ))}
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default TagList;
