import React, { Component } from 'react';

const checkUser = ()=>{
    var token = window.localStorage.getItem("user");
    if (token){
        return true;
    }else{return false;}
}
// class checkUser extends Component{
//     render(){
//         return (true);
//     }
// }


export default checkUser;