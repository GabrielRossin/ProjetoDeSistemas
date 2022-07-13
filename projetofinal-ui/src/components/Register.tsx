import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import IUser from "../types/user.type";
import { getCurrentUser, register } from "../services/auth.service";
import Navbar from "./Navbar";

import '../styles/Register/register.css'
import { Link, Redirect } from "react-router-dom";

const Register: React.FC = () => {
  const [successful, setSuccessful ]= useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  if(getCurrentUser() !== null) {

    return ( <Redirect to={'/profile'} />
    )
  }

  const initialValues: IUser = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().trim()
      .test(
        "len",
        "O nome de usuário deve ter entre 3 e 30 caracteres.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 30
      )
      .required("Este campo é obrigatório!"),
    email: Yup.string().trim()
      .email("E-mail inválido.")
      .required("Este campo é obrigatório!"),
    password: Yup.string().trim()
      .test(
        "len",
        "A senha deve ter entre 6 e 40 caracteres.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("Este campo é obrigatório!"),
  });

  const handleRegister = (formValue: IUser) => {
    const { username, email, password } = formValue;

    register(username, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        setSend(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
        setSend(false);
      }
    );
  };

  return (
    
    <div className="body">
      <Navbar/>
      <div className="card card-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"> Senha </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  
                  <button type="submit" 
                          className="btn btn-primary btn-block" 
                          disabled={send}
                        
                  >
                  {send && (
                      <span className="spinner-border spinner-border-sm"></span>
                      
                      
                  )}
                     Cadastrar
                  </button>
                </div>
              </div>
            )}

            {message && (
              <><div className="form-group">
                <div
                  className={successful ? "alert alert-success" : "alert alert-danger"}
                  role="alert"
                >
                  Usuário registrado com sucesso!
                </div>
              </div>
              <div>
                  <button className="btnCreateForm">
                    <Link to={"/formProfile"}>
                      Ir para o cadastro de perfil</Link>
                  </button>
                </div>
              </>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
