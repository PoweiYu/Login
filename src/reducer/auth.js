const authReducer = (state = false, action) => {
    switch(action.type){
        case 'LOGGIN':
            return state = true;
        default: 
            return state;
    }
}

export default authReducer;