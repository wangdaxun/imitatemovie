import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Score from './components/Score';
import Artist from './components/Artist'
import CollapsibleText from './components/CollapsibleText';
import ScoreDistribute from './components/ScoreDistribute';
import LinkLink from '../../components/LineLink.scss';
import "./index.scss";
import ImageSlide from "./container/ImageSlide";
import Comment from "./container/Comment"
import request from "../../helper/request";
import { Link } from "react-router-dom"
import LineLink from "../../components/LineLink";
class Detail extends Component{
  state = {
    actor: [],
    showImage: false
  };

  getData = async () =>{
    const data = await request('/actor');
    this.setState({
      actor : data
    });
  };

  toggleImage= () =>{
    this.setState({
      showImage: !this.state.showImage
    })
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    const settings = {
      className : 'imageSlider__content',
      afterChange: this.changeIndex
    }
    const{ actor } = this.state;
    return(

      <div className="detail">
        <div className="detail__top">
          <div className="tOperator">
            <Link to="/" className="tOperator__icon tOperator__icon--arrl"></Link>
            <div className="tOperator__icon tOperator__icon--share"></div>
          </div>
          <TopBar onShowImage={this.toggleImage}/>
        </div>
        <div className="detail__model">
          <Score/>
        </div>
        <div className="detail__model">
          <CollapsibleText height={84}>
            <div className="detail__overview">
              陈末（邓超饰）被称为全城最贱，每天和王牌DJ小容（杜鹃饰）针锋相对，谁也不知道他们的仇恨从何而来。陈末的两个兄弟，分别是全城最傻的猪头（岳云鹏饰），全城最纯的茅十八（杨洋饰），三人每天横冲直撞，以为可以自在生活，结果都面临人生最大的转折点。陈末相遇了最神秘的幺鸡（张天爱饰），猪头打造了最惨烈的婚礼，茅十八经历了最悲伤的别离，这群人的生活一点点崩塌，往事一点点揭开。梦想，爱情，友情都离陈末远去。一个失去所有的人，已经弄丢自己的路，直到听到来自全世界的一段语音
            </div>
          </CollapsibleText>
        </div>
        <div className="detail__model">
          <div className="detail__model--title">演职人员</div>
          <Artist data={actor}/>
        </div>
        <Comment></Comment>
        <div className="detail__model">
          <div className="detail__model--title">影片资料</div>
          <div className="con">
            <LineLink href={"#"} extra={""} title={"幕后花絮"}/>
            <LineLink href={"#"} extra={""} title={"台词精选"}/>
            <div  className="content">
            <LineLink href={"#"} extra={""} title={"出品发行"}/>
            </div>
            <Link to="/seat" className="detail__buyBtn">选座购票</Link>
          </div>
          </div>
        { this.state.showImage && <ImageSlide onClose={this.toggleImage}/>}
      </div>
    )
  }
}

Detail.proType = {

};
export default Detail;
