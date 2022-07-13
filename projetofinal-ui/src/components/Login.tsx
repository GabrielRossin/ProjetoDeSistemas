import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCurrentUser, login, loginGoogle } from "../services/auth.service";
import { RouteComponentProps, Link, Redirect } from "react-router-dom";
import imageLogin from '../assets/login/login.jpg'
import '../styles/Login/login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { IUserInfo, IUserLogin } from "../types/login.type";
import { CredentialResponse, GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";



interface RouterProps {
  history: string;
}


type Props = RouteComponentProps<RouterProps>;

const Login: React.FC<Props> = ({ history }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [credentialResponse, setCredentialResponse] = useState<CredentialResponse | null>();

  if(getCurrentUser() !== null) {
    return ( <Redirect to={'/profile'} />
    )
  }

  const initialValues: IUserLogin = {
    username: "",
    password: "",
  };

  const handleCredentialResponse = (credentialResponse:CredentialResponse) => {
    const idTokenString = credentialResponse.credential as string;

    // loginGoogle(idTokenString).then(
    //   () => {
    //     history.push("/profile");
    //     window.location.reload();
    //   },
    //   (error) => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     setMessage(resMessage);
    //   }
    // );
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().trim().required("Este campo é obrigatório!"),
    password: Yup.string().trim().required("Este campo é obrigatório!"),
  });

const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setMessage("");
    setLoading(true);

    login(username, password).then(
      () => {
        history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };


return (
    
<div className="body">
        
      <div>
          <img src={imageLogin} alt="imagem da tela de login" id="ImageLogin"></img>
      </div>   

      <div className="areaLogin">
          <h1>LOGIN</h1>
          
          <button className="BtnDefaultIcons">
              <FacebookIcon />
              <div className="center">Login com Facebook </div> 
          </button>
            
            <GoogleLogin 
                  onSuccess={credentialResponse => {
                    setCredentialResponse(credentialResponse);
                    handleCredentialResponse(credentialResponse);
                  }
                }
                  onError={() => {
                    console.log('Login Failed');
                  }}
            />     

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-imput">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="field" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-imput">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="field" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-imput">
                <button type="submit" className="btnEntrar" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-imput">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <button id="btnCadastro">  
                  <Link to="/register">Criar nova conta</Link>     
                </button>
              <Link to ="/forgotPassword">Redefinir a senha</Link>
            </Form>
          </Formik>
        </div>
  </div>
  );
};

export default Login;


