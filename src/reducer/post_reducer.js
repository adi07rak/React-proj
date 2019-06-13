import { ADD_POST, DEL_POST, LIKE_POST, GET_POST } from '../action/post_act';

const InitVal = [];

const postRedu = (state=InitVal,action)=>{

    switch(action.type){
        case ADD_POST:
        break;
        case DEL_POST:
        break;
        case LIKE_POST:
        break;
        case GET_POST:
            return[
                ...action.data
            ]
        break;
        default:   
            return state;
    }
}

export default postRedu;