import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

import checkUser from '../service/authUser';


class PrivateRoute extends Component{
    render(){
        let content = <Route {...this.props}/>
        if(!checkUser()){
            content = <Redirect to="/login" />
        }
        return(
            <span>{content}</span>
        )
    }
}

export default PrivateRoute;