import axios from "axios";

export const fetchUser = () => {
  return async function(dispatch){
    let url = "http://localhost:5000/api/v1/user/currentUser";
    let headerAuth = process.env.NODE_ENV === "development" ? {'authorization': `Bearer ${localStorage.getItem("token")}`} : {};

    let user = await axios({
      method: "GET",
      url:url,
      headers: headerAuth
    });
   
    dispatch({ type: "FETCH_USER", payload: user.data.data})
  }
}


