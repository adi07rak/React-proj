import React, {Component} from 'react';
import checkUser from '../service/authUser';
import {loginUser, logNav} from '../action/login_act';
import { connect } from 'react-redux';


class Login extends Component{

    state={
        user:{
            uname:"",
            password:""
        }
    }

    authuser = (event)=>{
        event.preventDefault();
        
        fetch('http://localhost:4000/login',{
            headers: {
                //'Content-Type':'application/x-www-form-urlencoded'
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(this.state.user)
        })
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data);
            if(data.isLoggedIn){
                alert("User Authorized!!");
                window.localStorage.setItem("user",data.token);
                //{this.move()};
                this.props.dispatch(logNav());
                this.props.history.push("/");
            }else{
                alert("wrong id Password..!!");
                //this.props.history.push("/login");
                {this.render()};
            }
        });
        
        

   
       
    }
    move =()=>{
        alert("move")
        this.props.history.push("/");
    }
    fieldChange = (event)=>{
        this.setState((prevState)=>{
            return{
                user:{
                    ...prevState.user,
                    [event.target.name] : event.target.value
                }
            }
        });
        event.persist();
    }
    render(){
        // console.log(this.props.logindata[0]);}
        return(<div className="container">
            <h1>welcome to Login Page</h1>
        
        <form style={style.box}>
            {/* {
                JSON.stringify(this.state)
            } */}
            <div className="form-group"><label >User Name</label>
                <input type="text" className="form-control" placeholder="User Name" 
                name="uname" onChange={this.fieldChange} value={this.state.user.uname}/>
            </div>
        
            <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" placeholder="password"
            name="password" onChange= {this.fieldChange} value ={this.state.user.password}/>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary" style={{width:"100%"}} onClick={this.authuser} >SignIn</button>
            </div>

            {/* <div className="alert alert-danger">
                Please provide valid Username  Password
            </div> */}
        </form>
        </div>

               
        );
            
        
    }
}

const style={
    box:{
        border: '1px solid black',
        padding : '15px',
        margin: '5% 30%',
        borderRadius : '20px'
    }
}
var as = {
    home: ()=>{
        this.props.history.push("/");
    },
    login: ()=>{
        this.props.history.push("/login");
    }
}
function mapStateToProps(store){
    console.log(store.Login);
    // if(store.Login.length != ""){
    //    console.log(store.Login[0].isLoggedIn);
    //     if(store.Login[0].isLoggedIn){
    //         window.localStorage.setItem("user",store.Login[0].token);
    //         {this.move()};
    //     }else{
    //         this.props.history.push("/login");
    //     }
       
    // }
    
    return {logindata:store.Login}
}

export default connect(mapStateToProps)(Login) ;