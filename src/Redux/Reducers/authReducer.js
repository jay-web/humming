const INTITIAL_STATE = {
    username : null
}

export default function(state = INTITIAL_STATE, action){
    switch(action.type){
        case "SIGN_UP":
            return action.payload;
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        default:
            return state
    }
}