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
      if(process.env.NODE_ENV === "development"){
        localStorage.setItem("token", user.data.token);
      }
      
      dispatch({ type: "SIGN_UP", payload: user.data.data})
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
        console.log(user);
       
        
        if (user.data.status === "success") {
          if(process.env.NODE_ENV === "development"){
            localStorage.setItem("token", user.data.token);
          }
           dispatch({ type: "LOGIN", payload: user.data.data});
           history.push("/home"); 
           
        }else{
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
        if(process.env.NODE_ENV === "development"){
          localStorage.setItem("token", "");
        }
        
          dispatch({ type: "LOGOUT", payload: response});
          history.push("/"); 
           
          
          
          
      }
  }
}