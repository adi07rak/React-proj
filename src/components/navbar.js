import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/js/jquery-3.3.1.min';
import { Link, NavLink } from 'react-router-dom';
import { checkUser } from '../auth';

import { logoutUser } from '../action/login_act';
import { connect } from 'react-redux';


class Navbar extends Component{
    
    logout(){
      window.localStorage.removeItem('user');
      this.props.dispatch(logoutUser(false));
      this.props.history.push("/login");
      alert("done");

    }
    render(){
        
        
        return(<nav className="navbar navbar-default" id="fix" style={style.col}>
        <div className="container-fluid">
          <div className="navbar-header" >
            <a className="navbar-brand" href="" >CONNECT</a>
          </div>
          
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {checkUser()&&<ul className="nav navbar-nav">
              <li  style={style.col}><NavLink to="/" className="glyphicon glyphicon-home" activeClassName="active" exact={true}></NavLink></li>
              <li ><NavLink to="/post" className="glyphicon glyphicon-list-alt" activeClassName="active" ></NavLink></li>
            </ul>}
            
            <ul className="nav navbar-nav navbar-right">
              {!checkUser()&&<li ><NavLink to="/login" activeClassName="active" >LogIn</NavLink></li>}
              {!checkUser()&&<li ><NavLink to="/signup" activeClassName="active" >SignUp</NavLink></li>}
              {checkUser() &&<li ><a href="" onClick={this.logout} >Logout</a></li>}
              {/* <li className="dropdown"  >
                <a href="" className="dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false" className="glyphicon glyphicon-chevron-down"></a>
                <ul className="dropdown-menu">
                  <li><a href="#"><label className="glyphicon glyphicon-user" ></label></a></li>
                  <li role="separator" className="divider"></li>
                  <li><NavLink to="" >LogOut</NavLink></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>)

    }
}



const style={
    col:{
        height:"none"
    }
}
function mapStateToProps(store){
  console.log(store);
  
  return{
      logout:store
  }
}

export default connect(mapStateToProps)(Navbar);