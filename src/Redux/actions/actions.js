import axios from "axios";

export const signUp = (...args) => {
  return async function (dispatch) {
    const [username, password, passwordConfirm, name, email, history] = args;

    const url = "http://localhost:5000/api/v1/user/signup";
    const newUser = {
      name,
      username,
      email,
      password,
      passwordConfirm,
    };

    let user = await axios({
      method: "POST",
      url: url,
      data: newUser,
    });

    
    if (user.data.status === "success") {
      dispatch({ type: "SIGN_UP", payload: user.data.data})
      history.push("/");
    }
  };
};


export const login = (...args) => {
    return async function(dispatch){
        const [username, password, history] = args;

        const url = "http://localhost:5000/api/v1/user/login";
    
        let user = await axios({
          method: "POST",
          url: url,
          data: { username, password },
        });
        console.log(user.data.data);
        if (user.data.status === "success") {
            dispatch({ type: "LOGIN", payload: user.data.data})
            history.push("/");  
            
        }
    }
}

export const logout = (history) => {
  return async function(dispatch){
    

      const url = "http://localhost:5000/api/v1/user/logout";
  
      let response = await axios({
        method: "GET",
        url: url
      });
      console.log(response);
      if (response.data.status === "success") {
          dispatch({ type: "LOGOUT", payload: response})
          history.push("/");  
          
      }
  }
}

export const fetchUser = () => {
  return async function(dispatch){
    let url = "http://localhost:5000/api/v1/user/currentUser";

    let user = await axios({
      method: "GET",
      url:url,
      headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzBmZWQ3NmNhMDQ4MTBmNzgwMmRjYiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MDcxMDQxLCJleHAiOjE2MTQ2NzU4NDF9.z5ESak98cxXpDh9pm-lzCu_9SGLZct0otQ3nYYPG4T8'}
    });
    
    dispatch({ type: "FETCH_USER", payload: user.data.data})
  }
}