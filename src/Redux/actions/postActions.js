import axios from "axios";

const postActions = {}

postActions.fetchPosts = () => {
    return async function(dispatch){
        let url = "http://localhost:5000/api/v1/post";
        let headerAuth = process.env.NODE_ENV === "development" ? {'authorization': `Bearer ${localStorage.getItem("token")}`} : "";

        let response = await axios({
          method: "GET",
          url: url,
          headers: headerAuth
        });
        
        let posts = response.data.data.posts;
       
        dispatch({ type: "FETCH_POST", payload: posts})
    }
}


postActions.createPosts = (newPost) => {
    return async function(dispatch){
        let url = "http://localhost:5000/api/v1/post";
        let headerAuth = process.env.NODE_ENV === "development" ? {'authorization': `Bearer ${localStorage.getItem("token")}`} : "";
        

    let response = await axios({
      method: "POST",
      url: url,
      data: newPost,
      headers: headerAuth
    });
    let post = response.data.data.post;
    
    dispatch({ type: "CREATE_POST", payload: post})
    }
}


postActions.deletePosts = (postId, userId) => {
  
  return async function(dispatch){
    let url = "http://localhost:5000/api/v1/post";
    let headerAuth = process.env.NODE_ENV === "development" ? {'authorization': `Bearer ${localStorage.getItem("token")}`} : "";

    let response = await axios({
      method: "DELETE",
      url: url,
      data:{
        postId: postId,
        userId: userId
      },
      headers: headerAuth

    });

    
    dispatch({ type: "DELETE_POST", payload: response.data.deletedPostId})
  }
}

// ? Like or unlike post

postActions.likePost = (postId, userId) => {
  return async function(dispatch){

    let url = "http://localhost:5000/api/v1/post";
    let headerAuth = process.env.NODE_ENV === "development" ? {'authorization': `Bearer ${localStorage.getItem("token")}`} : "";

    let response = await axios({
      method: "PATCH",
      url: url,
      data:{
        postId: postId,
        userId: userId
      },
      headers: headerAuth

    });

    let updatedPost = response.data.data.post;
  
    dispatch({ type: "LIKE_POST", payload: updatedPost})

  }
}




export default postActions;