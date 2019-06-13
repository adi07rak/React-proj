import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import './login';
import Login from './login';
import Logout from './logout';
import Home from './home';
import Signup from './signup';
import Post from './post';
//import '../../node_modules/bootstrap/dist/js/jquery-3.3.1.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Invalid from './invalid';
import Navbar from './navbar';
import PrivateRoute from './privateRoute';

class App extends Component {
  
  authUsers = (user)=>{
    // console.log(user);
    if(user.uname=="admin" && user.password=="admin"){
      alert("user authorized!!");
      return true;
    }else{
      alert("Invalid User!!!");
      return false;
    
    }
    
  }

  render() {
    
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute path="/" component={Home} exact={true}/>
          <Route path="/login" render={({history})=>{return <Login authUsers={this.authUsers} history={history}/>}}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/post" component={Post}/>
          <PrivateRoute path="/logout" component ={Logout}/>
          
          <Route component={Invalid}/>
        </Switch>

        {/* <Login authUsers={this.authUsers}/> */}
      </div>
    );
  }
}

export default App;
