import {LOGIN, LOGNAV} from '../action/login_act';

const InitState = [] ;

const loginRedu = (state = InitState,action)=>{
    console.log(action);
    
    switch(action.type){
        case LOGIN:
            return [
               action.data
            ]
        break;
        case LOGNAV:
            return[
                action.data
            ]
        break;
        default:
            return state;
    }
}

export default loginRedu;