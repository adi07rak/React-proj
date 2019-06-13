export const ADD_POST = "ADD_POST";
export const DEL_POST = "DEL_POST";
export const LIKE_POST = "LIKE_POST";
export const GET_POST = "GET_POST";


export const createpost = ()=>{
    return{
        type:ADD_POST
    }
}

export const deletepost = ()=>{
    return{
        type:DEL_POST
    }
}

export const likepost = ()=>{
    return{
        type:LIKE_POST
    }
}

export const getpost = ()=>{
    return (dispatch) =>{
        fetch('http://localhost:4000/get_post',{
            method: "get"
        })
        .then((data)=>data.json())
        .then((data)=>{
            dispatch({
                type: GET_POST,
                data
            });
                        
        });
    }
}