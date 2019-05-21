import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./SeatSelector.scss";
import {data} from '../mock/seat';

const SEAT_WIDTH = 30;
const SEAT_HEIGHT = 30;
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const lastSeat = data[data.length-1];
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
//解决canvas绘制图片不清晰的问题
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;
class SeatSelector extends Component {
  componentDidMount(){
    console.log(CANVAS_HEIGHT);
    this.cts = this.refs.canvas.getContext('2d');
    this.cts.font = `${10}px Arial`;
    this.cts.fillStyle = '#000';
    this.cts.textAlign = 'center';
    //加载需要的资源
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;
    const loadCallback = () =>{
      count++;
      if(count === 3){
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawAllSeat();
      }
    };


    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = './source/seat.svg';
    selectImage.src = './source/seat-hover.svg';
    soldImage.src = './source/seat-sold.svg';
  }

  componentDidUpdate(prevProps, prevState) {
    this.drawAllSeat();
    this.drawSelectSeat()
  }

  drawAllSeat = () =>{
    const seatData = data;

    for(let i = 0; i< seatData.length; i++){
      const { isSold , xPos , yPos} = seatData[i];
      const offsetLeft = (xPos-1) * SEAT_WIDTH;
      const offsetTop = (yPos-1) * SEAT_HEIGHT;
      if(isSold){
        //绘制已售样式
        this.cts.drawImage(this.soldImage, offsetLeft, offsetTop, SEAT_WIDTH-5, SEAT_HEIGHT-5);
      }else{
        //绘制空座样式
        this.cts.drawImage(this.emptyImage, offsetLeft, offsetTop, SEAT_WIDTH-5, SEAT_HEIGHT-5);
      }
    }
  };

  drawSelectSeat = () =>{
    const { selectSeat } = this.props;
    for(let i=0; i < selectSeat.length;i++){
      const { xPos , yPos , rowIndex , colIndex } = selectSeat[i];
      const offsetLeft = (xPos-1) * SEAT_WIDTH;
      const offsetTop = (yPos-1) * SEAT_HEIGHT;
      this.cts.drawImage(this.selectImage, offsetLeft, offsetTop, SEAT_WIDTH-5, SEAT_HEIGHT-5);
      //this.cts.getContext('2d');
      this.cts.font= "苹果中等";

      this.cts.fillText(rowIndex+"排",offsetLeft+(SEAT_WIDTH-5)/2, offsetTop+(SEAT_HEIGHT-5)/3);
      this.cts.fillText(colIndex+"座",offsetLeft+(SEAT_WIDTH-5)/2, offsetTop+(SEAT_HEIGHT-5)/1.3);

    }
  };

  clickSeat = (e) =>{
    //1.获取点击的横坐标与纵坐标
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;
    const clickY = e.pageY - offset.top;
    const xPox = Math.ceil(clickX / SEAT_WIDTH);
    const yPox = Math.ceil(clickY / SEAT_HEIGHT);
    //2.从data中筛选出符合点击坐标的对象
    const seat = data.find(seat => seat.xPos === xPox && seat.yPos === yPox);
      //2.1如果未找到或者当前座位已售，则不响应
      //2,1如果已经选择了，需要取消选择，反之选择座位
      //2.2如果已经选择了四个座位，则不能再选
    if(!seat || seat.isSold){
      return;
    }
    //匹配已经选中的座位点没点击过
    const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);
    if(seatIndex > -1){
      this.props.onRemove(seat.id);
    }else{
      if(this.props.selectSeat.length >=4 ){
        alert("不能超过四个座位");
      }
      else{
        this.props.onAdd(seat);
        //3.重新绘制canvas
      }
    }
  };

  render(){
    return(
      <canvas ref="canvas" onClick={this.clickSeat}  height={CANVAS_HEIGHT} width={CANVAS_WIDTH}></canvas>
    )
  }
}

SeatSelector.propTypes = {
  selectSeat : PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};



export default SeatSelector;
