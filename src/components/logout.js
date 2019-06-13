import React, {Component} from 'react';


class Logout extends Component{
    componentWillMount(){
        // this.props.dispatch(logOut());
        window.localStorage.removeItem("user");
        this.props.history.push("/login");
    }
    render(){
        return <h1>waiting</h1>
    }
}

export default Logout;