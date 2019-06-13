import React, { Component } from 'react';

class Signup extends Component{
    render(){
        return(<div className="container">
            <form style={style.box}>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="User Name"  name="uname"required/>
                </div>
    
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required/>
                </div>
    
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"  placeholder="First Name" name="faname" required/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control"  placeholder="Last Name" name="lname" required/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="xxx-xxx-xxxx"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" required/>
                </div>

                <div className="radio">
                    <label><input type="radio" name="Gender" value="Male"  required/>Male </label>
                    <label><input type="radio" name="Gender" value="Female" required/>Female </label>
                    <label><input type="radio" name="Gender" value="non" required/>Other</label>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary"  style={{width:"100%"}}  >submit</button>
                </div>
    
            </form>
        </div>)
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

export default Signup;