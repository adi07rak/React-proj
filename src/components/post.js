import React, { Component } from 'react';
import { connect } from 'react-redux';
import LikeCom from './like-com';

import { getpost } from '../action/post_act';

class Post extends Component {

    componentWillMount(){
        this.props.dispatch(getpost());
         
        
    }

    render(){
        
        return <div><h1>Post</h1>
                <div className="" style={style.div1}>
                    <h1>Posts</h1>
                    <div className="panel" id="ex1" style={{width:"100%", padding:"5px"}}>
                        <div className="panel-body">
                            {
                                this.props.post && this.props.post.map((item,index)=> (
                                    <div key={index} style={style.div2} >
                                        <div className="input-group">
                                            <div className="input-group-addon"><a className="glyphicon glyphicon-chevron-right"></a></div>
                                            <label className="form-control"style={{padding:"10px"}}><a className="glyphicon glyphicon-user"> {item.fname}</a></label>
                                            <div className="input-group-addon"><a  className="glyphicon glyphicon-trash"></a></div>
                                        </div>
                                        <div className="container" >
                                            <label >{item.p_title}</label>
                                            <div className="form-group" style={{border: "0.5px solid gray", width:"75%"}} >
                                                <h4 style={{margin:"10px"}}>{item.p_body}</h4>
                                            </div>
                                        </div>
                                        <div><LikeCom></LikeCom></div> 
                                    </div>
                                ))
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
    }
}

const style={
    div1:{
        width:"70%",
        //float:"left",
        padding: "0px 0px 0px 10px",
        borderLeft : "1px solid black"
    },
    div2:{
        borderRadius: "7px",
        border: "2px solid #b7b3b3",
        margin :"0px 0px 10px 0px"
    }
}

function mapStateToProps(store){
    //console.log(store);
    
    return{
        post: store.Post
    }
}

export default connect(mapStateToProps)(Post);