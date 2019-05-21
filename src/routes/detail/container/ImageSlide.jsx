import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './ImageSlide.scss';
class ImageSlide extends Component{

  state = {
    index:1
  };

  changeIndex = index => {
    this.setState({
      index : index+1
    });
  };

  render()
  {
    const settings = {
      className: 'imageSlider__content',
      afterChange:  this.changeIndex
    };
    return(
      <div className="imageSlide" onClick={this.props.onClose}>
        <div className="imageSlide__index">
          {this.state.index}/5
        </div>
        <Slider {...settings}>
          <div className="imageSlide__item">
            <img src="./source/poster/cndqsjlg0.jpg"/>
          </div>
          <div className="imageSlide__item">
            <img src="./source/poster/cndqsjlg1.jpg"/>
          </div>
          <div className="imageSlide__item">
            <img src="./source/poster/cndqsjlg2.jpg"/>
          </div>
          <div className="imageSlide__item">
            <img src="./source/poster/cndqsjlg3.jpg"/>
          </div>
          <div className="imageSlide__item">
            <img src="./source/poster/cndqsjlg4.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}

ImageSlide.propTypes = {
  onClose:PropTypes.func.isRequired
};
export default ImageSlide;

