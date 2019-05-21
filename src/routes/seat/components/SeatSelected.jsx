import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./SeatSelected.scss";

const SeatSelected = ({selectSeat,onRemove}) =>{
  return(
    <div className="seatSelected">
      <div className="seatSelected__list">
        {
          selectSeat.map(item =>(
            <div className="movieTicket seatSelected__item"  key={item.id} onClick={() =>onRemove(item.id)}>
              <div className="movieTicket__detail">
                <div className="movieTicket__detail--pos">{item.rowIndex}排{item.colIndex}座</div>
                <div className="movieTicket__detail--price">33元</div>
              </div>
              <div className="movieTicket__close"></div>
            </div>
          ))
        }
      </div>
      <div className="seatSelected__buy">{33 * selectSeat.length}元 确认选座</div>
    </div>
  )
};

SeatSelected.propTypes = {
  selectSeat : PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default SeatSelected;
