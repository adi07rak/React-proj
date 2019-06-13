export const LOGIN = "LOGIN";

export const loginUser = (data1)=>{
    console.log(data1);
    
    return (dispatch) =>{
        
        fetch('http://localhost:4000/login',{
            headers: {
                //'Content-Type':'application/x-www-form-urlencoded'
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(data1)
        })
        .then((data)=>data.json())
        .then((data)=>{
            dispatch({
                type: LOGIN,
                data
            });
        });
       return Promise.resolve();
    }
}

export const LOGNAV = "LOGNAV";
export const logNav = ()=>{
    return{
        type : LOGNAV
    }
}

export const LOGOUT = "LOGOUT";

export const logoutUser = ()=>{
    return {
        type: LOGOUT,
         
    }
}

