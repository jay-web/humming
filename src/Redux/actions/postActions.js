import axios from "axios";

export const fetchPosts = () => {
    return async function(dispatch){
        let url = "http://localhost:5000/api/v1/post";

        let response = await axios({
          method: "GET",
          url: url,
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzYzYTJmZTE4YjU0MTMwMjc0MjU2YiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MTY2NTk0LCJleHAiOjE2MTQ3NzEzOTR9.2ZWaKuxtizbvxY01wj3OUBb0eYaOdACfY072CKhShV0",
          },
        });
        
        let posts = response.data.data.posts;
        console.log(posts);
        dispatch({ type: "FETCH_POST", payload: posts})
    }
}


export const createPosts = (newPost) => {
    return async function(dispatch){
        let url = "http://localhost:5000/api/v1/post";

    let response = await axios({
      method: "POST",
      url: url,
      data: newPost,
      headers: {
        authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzYzYTJmZTE4YjU0MTMwMjc0MjU2YiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MTY2NTk0LCJleHAiOjE2MTQ3NzEzOTR9.2ZWaKuxtizbvxY01wj3OUBb0eYaOdACfY072CKhShV0",
      },
    });
    let post = response.data.data.post;
    console.log("payload", post);
    dispatch({ type: "CREATE_POST", payload: post})
    }
}


export const deletePosts = (postId, userId) => {
  console.log({postId});
  console.log({userId});
  return async function(dispatch){
    let url = "http://localhost:5000/api/v1/post";

    let response = await axios({
      method: "DELETE",
      url: url,
      data:{
        postId: postId,
        userId: userId
      },
      headers: {
        authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzYzYTJmZTE4YjU0MTMwMjc0MjU2YiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MTY2NTk0LCJleHAiOjE2MTQ3NzEzOTR9.2ZWaKuxtizbvxY01wj3OUBb0eYaOdACfY072CKhShV0",
      },

    });

    
    dispatch({ type: "DELETE_POST", payload: response.data.deletedPostId})
  }
}