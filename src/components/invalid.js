import React, { Component } from 'react';

class Invalid extends Component{
    render(){
        return<div className="alert alert-danger">
            <h1>Invalid!!! </h1>
            <h2>Page not Found!!!</h2>
        </div>
    }
}

export default Invalid;