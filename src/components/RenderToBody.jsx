import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import PropTypes from 'prop-types';

class RenderToBody extends Component {
  componentDidMount(){
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this.renderToLayer();
  }

  componentDidUpdate(){
    this.renderToLayer();
  }

  componentWillUnmount(){
    this.unrenderToLayer();
  }

  renderToLayer = () =>{
    ReactDOM.render(
      this.props.children,
      this.popup
    );
  }

  unrenderToLayer = () =>{
    if(!this.popup){
      return;
    }

  ReactDOM.unmountComponentAtNode(this.popup);
  document.body.removeChild(this.popup);
  this.popup = null;
  }

  render(){
    return null;
  }
}

RenderToBody.propTypes = {
  children: PropTypes.any
};

export default RenderToBody;
