import React, { Component } from 'react';

class LikeCom extends Component{
    render(){
        return<div>
            <div className="input-group" >
                <div className="input-group-addon">
                    <a  className="glyphicon glyphicon-thumbs-up"  ><span className="badge"></span></a>
                    
                </div>
                <div className="input-group-addon"><a  className="glyphicon glyphicon-tasks" ></a></div>
                
                <div className="input-group-addon">
                    <a   className="glyphicon glyphicon-pencil" data-toggle="modal"  ></a>
                </div>
            </div>
            <div className="input-group" >
                <input type="text" className="form-control" name="com" placeholder="Comment"  />
                <div className="input-group-addon"><a className="glyphicon glyphicon-send" ></a></div>
            </div>
        </div>
    }
}

export default LikeCom;