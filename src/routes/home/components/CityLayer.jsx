import React,{Component} from 'react';
import './CityLayer.scss';
import request from "../../../helper/request";
import PropTypes from 'prop-types';

class CityLayer  extends Component {

  state = {
    hot:[],
    all:{}
  };

  componentWillMount(){
    this.getData();
  }

  getData = async()=>{
    const data = await request('/city');
    const { hot, all } = data;
    this.setState({
      hot,
      all
    });
  }

  render(){
    const{ onClose, onSelect} = this.props;
    const{ hot,all } = this.state;
    const alphabetKeys = Object.keys(all);
    return(
      <div className="cityLayer">
        <div className="cityLayer__title">
          <div className="cityLayer__title--close" onClick={onClose}>关闭</div>
          <div className="cityLayer__title--choose">选择城市</div>
        </div>
        <div className="cityLayer__content">
          <div className="cityInput"><input type="text" className="cityInput__in"/></div>
          <div className="cityBlock" id="定位">
            <div className="cityBlock__word">定位城市</div>
            <div className="cityBlock__main">
              <div className="cityBlock__main--text active" onClick={()=>onSelect('哈尔滨')}>哈尔滨</div>
            </div>
          </div>
          <div className="cityBlock" id="热门">
            <div className="cityBlock__word">热门城市</div>
            <div className="cityBlock__main">
              {
                hot.map(item =>(
                  <div className="cityBlock__main--text" key={item.cityCode} onClick={()=>onSelect(item.regionName)}>{item.regionName}</div>
                ))
              }
            </div>
          </div>
            {
              alphabetKeys.map(alphabet => {
                  const city = all[alphabet];
                  return(
                    <div className="cityList" key={alphabet} id={alphabet}>
                      <div className="cityList__word"><span>{alphabet}</span></div>
                      {
                        city.map(item =>(
                          <div className="cityList__text" key={item.cityCode} onClick={()=>onSelect(item.regionName)}><span>{item.regionName}</span></div>
                        ))
                      }
                    </div>
                  )
                }
              )
            }
        </div>
        <div className="cityLayer__index cityIndex">
          <div className="cityLayer__index--item">
            <a href="#定位">定位</a>
          </div>
          <div className="cityLayer__index--item">
            <a href="#热门">热门</a>
          </div>
        {
          alphabetKeys.map(alphabet => (
            <div className="cityLayer__index--item" key={alphabet}>
              <a href={"#"+alphabet}>&nbsp;&nbsp;&nbsp;{alphabet}</a>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
};

CityLayer.propTypes = {
  onClose : PropTypes.func.isRequired,
  onSelect  : PropTypes.func.isRequired
};

export default CityLayer;
