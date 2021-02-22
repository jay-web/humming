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
      dispatch({ type: "SIGN_UP", payload: user.data})
      history.push("/home");
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
    
        if (user.data.status === "success") {
            dispatch({ type: "LOGIN", payload: user.data})
            history.push("/home");  
            console.log(user);
        }
    }
}
