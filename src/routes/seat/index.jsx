import React, {Component} from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import SeatTop from "./components/SeatTop";
import SeatSelected from "./components/SeatSelected";
import SeatSelector from "./container/SeatSelector";
import PropTypes from 'prop-types';
class Seat extends Component {
 state = {
   selectSeat: []
 };

 addSeat = (seat) => {
   this.setState(prevState =>({
     selectSeat: [...prevState.selectSeat, seat]
   }));
 };

 removeSeat = (id) =>{
  this.setState({
    selectSeat:this.state.selectSeat.filter(seat => seat.id !== id)
  });
 };

 componentDidMount(){

  }

  render(){
   const{ selectSeat } = this.state;
    return(
      <div className="seat">
        <div className="seat__title">
          <div className="tOperator">
            <Link to="/detail" className="tOperator__icon tOperator__icon--arrlblk"></Link>
              <div>万达影城</div>
            <div className="tOperator__icon tOperator__icon--shareblk"></div>
          </div>
        </div>
        <SeatTop/>
        <div className="seatMovieInfo">
          <div className="seatMovieInfo__bg"><i className="seatMovieInfo__bg--choose"/><span>可选</span></div>
          <div className="seatMovieInfo__bg"><i className="seatMovieInfo__bg--already"/><span>已售</span></div>
          <div className="seatMovieInfo__bg"><i className="seatMovieInfo__bg--selected"/><span>已选</span></div>
        </div>
        <div className="seat__main">
          <div className="seat__tip">
            <div className="Trapezoid"></div>
            <div className="seat__tip--text">B13屏幕</div>
          </div>
          <div className="seat__content">
            <SeatSelector selectSeat={selectSeat} onAdd={this.addSeat} onRemove={this.removeSeat}/>
          </div>
        </div>
        <SeatSelected selectSeat={selectSeat} onRemove={this.removeSeat}/>
      </div>
    )
  }
}

Seat.propTypes = {

};

export default Seat;
