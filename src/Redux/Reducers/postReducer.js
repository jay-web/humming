const INTITIAL_STATE = {
    posts : []
}

export default function(state = INTITIAL_STATE, action){
    switch(action.type){
        case "FETCH_POST":
            return {...state, posts: action.payload};
        case "CREATE_POST":
            return {...state, posts: [action.payload,...state.posts]};
        case "DELETE_POST":
            let posts = state.posts.filter((item) => item.id !== action.payload)
            return {...state, posts: posts};
        default:
            return state;
    }
}