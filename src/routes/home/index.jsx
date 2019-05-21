import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import PosterSlide from './components/Slide';
import TabMenu from '../../components/TabMenu';
import RenderToBody from '../../components/RenderToBody';
import CityLayer from './components/CityLayer'
import './index.scss';
import MovieItem from "./components/MovieItem";
import request from "../../helper/request";
class Home extends Component {
  state = {
    city: '',  // 当前城市
    poster: [],  // slide 海报
    movie: [], //当前热映电影
    cityLayerVisible: false //城市浮层是否展现
  };

  showCityLayer = () =>{
    this.setState({
      cityLayerVisible: true
    });
  };

  hideCityLayer = () =>{
    this.setState({
      cityLayerVisible: false
    });
  };

  onChangeCity = (city) =>{
    this.setState({
      city
    });
    this.hideCityLayer();
  };

    componentWillMount(){
    this.getData();
    //this.getCity();
  }

  getData = async () => {
    const data = await request('/index');
    const{ city, poster, movie} = data;
    this.setState({
      city,
      poster,
      movie
    });
  };

  getCity = async () => {
    const data = await request('/city');
  };


  render(){
    const{ city ,poster , movie ,cityLayerVisible} = this.state;
    return(
      <div>
        <TopBar city={city} showCityLayer={this.showCityLayer}/>
        <div className="home__slide">
          <div className="home__slideWrap">
            <PosterSlide data={poster}/>
          </div>
        </div>
        <ul className="home__content">
          {
            movie.map(item => (
              <li key={item.name}><MovieItem movie={item}/></li>
            ))
          }
        </ul>
        <TabMenu current="movie"/>
        {
          cityLayerVisible && <RenderToBody><CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity}/></RenderToBody>
        }
      </div>
    );
  }
}
Home.proTypes = {};

export default Home;
