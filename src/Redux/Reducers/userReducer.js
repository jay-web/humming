const INITIAL_STATE = {
    user: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case "FETCH_USER": 
            return action.payload;
        default:
            return state;
    }
}