const INTITIAL_STATE = {
    posts : []
}

export default function(state = INTITIAL_STATE, action){
    switch(action.type){
        case "FETCH_POST":
           
            return { ...state, posts: action.payload};
        case "CREATE_POST":
            return {...state, posts: [...state.posts, action.payload]};
        case "LIKE_POST":
            let upPosts = state.posts.map((item) => {
               
                if(item._id === action.payload._id){
                    return action.payload
                }else{
                    return item;
                }
            });
            return {
                ...state, 
                posts: upPosts 
            }
        case "DELETE_POST":
            let posts = state.posts.filter((item) => item._id !== action.payload);
            console.log(posts);
            return {...state, posts: posts};
        default:
            return state;
    }
}