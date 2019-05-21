import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import Home from './routes/home/index';
import User from './routes/user/index';
import Detail from './routes/detail/index';
import Seat from './routes/seat/index';
import './App.css';


const LogIn =() =>{
  return <p>注册界面</p>
}

const NotFound =() =>{
  return <p>404 NotFound</p>
}

const isLogin = false;

class App extends Component {
  render() {
    return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/user" exact component={User}/>
         <Route path="/login" exact component={LogIn}/>
         <Route path="/detail" exact component={Detail}/>
         <Route path="/seat" exact component={Seat}/>
         <Route component={NotFound}/>
       </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
