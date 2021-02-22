
export default function(state = null, action){
    switch(action.type){
        case "SIGN_UP":
            return action.payload;
        case "LOGIN":
            return action.payload;
        default:
            return state
    }
}