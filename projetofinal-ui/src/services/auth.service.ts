import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const register = (username: string, email: string, password: string) => {

  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

export const resetPassword = (email: string) => {
  return axios.post(API_URL + "reset_password", {
    email,
  });
};

export const forgotPassword = (email: string) => {
  return axios.post(API_URL + "forgot_password", {
    email,
  });
};

export const updateProfile = (
  username: string, firstName:string ,lastName: string, idade: string, objetivo:string, 
  email:string , sexo: string,
  ) => {
  return axios.post(API_URL + "updateProfile", {
    
    username, firstName , lastName , idade , objetivo , email , sexo
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
  
};

export const createFormProfile = ( username: string, firstName:string ,lastName: string, 
                                   idade: number,  objetivo:string, sexo: string) =>
{
 
  return axios.post(API_URL + "createProfile", {
   username, firstName , lastName , idade , objetivo, sexo
  })
  
}
    
export const registerFeedback = (mensagem: string, assunto:string) => {
  return axios.post(API_URL + "feedback", {
    mensagem,
    assunto
  });
};

export const changePassword = (password: string, username:string, passwordAtual: string) =>
{
    return axios.post(  API_URL + "changePassword",{
                          password, username , passwordAtual
                        }  
                     )
}

export const deleteAccount = (username:string, passwordAtual: string) =>
{
  //localStorage.removeItem("user");
  return axios.post(
      API_URL + "delete",
      {
          username, passwordAtual
      }
    )

}

export const report = (mensagem: string) =>
{
    return axios.post(
      API_URL + "report",
      {
          mensagem
      }
    )
}

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const loginGoogle = (idTokenString: string) =>
{
  return axios
  .post(API_URL + "loginGoogle",
    {idTokenString}
  )
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
}


export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};


export const getCurrentProfile = () => {
  const profileStr = localStorage.getItem("profile");
  if (profileStr) return JSON.parse(profileStr);

  return null;
};
