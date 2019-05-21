import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AboutMovie from './components/AboutMovie';
import './index.scss';
import TabMenu from "../../components/TabMenu";
import LineLink from "../../components/LineLink";
import Top from "./components/Top"
class User extends Component {

  render(){
    return(
      <div className="user">
        <Top name={"周杰伦"}/>
        <div className="user__content">
          <LineLink href={"#"} title={"收藏的电影"} extra={2}/>
          <LineLink href={"#"} title={"看过的电影"} extra={64}/>
        </div>
          <div className="bot">
          <TabMenu current="user"/>
        </div>
      </div>

    )
  }
}

User.proTypes = {};

export default User;
