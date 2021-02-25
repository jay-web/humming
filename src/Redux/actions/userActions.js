import axios from "axios";

export const fetchUser = () => {
  return async function(dispatch){
    let url = "http://localhost:5000/api/v1/user/currentUser";

    let user = await axios({
      method: "GET",
      url:url,
      headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzYzYTJmZTE4YjU0MTMwMjc0MjU2YiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MTY2NTk0LCJleHAiOjE2MTQ3NzEzOTR9.2ZWaKuxtizbvxY01wj3OUBb0eYaOdACfY072CKhShV0'}
    });
    
    dispatch({ type: "FETCH_USER", payload: user.data.data})
  }
}


