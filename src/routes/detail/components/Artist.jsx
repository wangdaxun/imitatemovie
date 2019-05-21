import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Artist.scss';
const Artist = ({data}) =>{
  return(
    <div className="mArtist">
      <ul className="mArtist__list">
      {
        data.map(item=>(
          <li key={item.name}>
            <a href="xxxx" className="artistInfo">
              <div className="artistInfo__img">
                <img src={item.image}/>
              </div>
              <div>
                <dl className="artistInfo__name">{item.name}</dl>
                <dd className="artistInfo__job">{item.job}</dd>
              </div>
            </a>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

Artist.propTypes = {
  data: PropTypes.array.isRequired
}
export default Artist;
