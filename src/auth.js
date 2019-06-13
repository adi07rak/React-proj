export const checkUser = ()=>{
    if(window.localStorage.getItem('user')){
        return true;
    }else{
        return false;
    }
}