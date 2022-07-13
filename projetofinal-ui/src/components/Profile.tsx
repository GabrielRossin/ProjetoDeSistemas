import { ErrorMessage, Field, Form, Formik} from "formik";
import React, {useState } from "react";
import {getCurrentUser, updateProfile } from "../services/auth.service";
import IP from "../types/profile.type";
import SemPermissao from './SemPermissao';
import * as Yup from "yup";


const Profile: React.FC = () => {

  const currentUser = getCurrentUser();

  const [successful, setSuccessful ]= useState<boolean>(false);
 // const [desativado, setDesativo] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const objetivos = ["Emagrecer", "Ganhar Massa", "Definir Músculos"];
  
  if(getCurrentUser()=== null)
  {
    return(<SemPermissao/>);
  }

  const initialValues: IP = {
    username: currentUser.username, firstName: currentUser.firstName,  
    lastName: currentUser.lastName, 
    idade: currentUser.idade, sexo: currentUser.sexo , objetivo: currentUser.objetivo, 
    email: currentUser.email,
  };


  const validationSchema = Yup.object().shape({
    
    firstName: Yup.string().trim()
    .test(
    
      "len",
      "The username must be between 3 and 200 characters.",
      (val: any) =>
        val &&
        val.toString().length >= 3 && val.toString().length <= 200  
    ).required("Este campo é obrigatório!"),

    lastName: Yup.string().trim()
    .test(
      "len",
      "The username must be between 3 and 200 characters.",
      (val: any) =>
        val &&
        val.toString().length >= 3 &&  val.toString().length <= 200
    ).required("Este campo é obrigatório!"),

    idade: Yup.string().trim()
    .test(
      "len",
      "The username must be between 3 and 20 characters.",
      (val: any) =>
        val &&
        val.toString().length >= 2 && val.toString().length <= 4
    ).required("Este campo é obrigatório!"),

    objetivo: Yup.string()
    .required("Este campo é obrigatório!")
    .oneOf(objetivos),

    email: Yup.string()
    .email("This is not a valid email.")
    .required("Este campo é obrigatório!"),
  })

  const objetivosOptions = objetivos.map((objetivos, key) => (
    <option value={objetivos} key={key}>
      {objetivos}
    </option>
  ));
  

  const handleRegister = (formValue: IP) => {
    const { username, firstName, lastName, idade, objetivo, email, sexo } = formValue;
    
    updateProfile(username, firstName, lastName, idade, objetivo, email, sexo).then(
      
      (response) => {
        setMessage("usuario alterado com sucesso");
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
    <div>
    <div className="col-xl-8">
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}  
                    >
                        <Form>
                            <div>
                                <div className="mb-3">
                                  <label className="small mb-1" htmlFor="inputUsername">Username
                                    </label>
                                  <Field className="form-control" id="inputUsername"
                                    placeholder="Enter your username" disabled
                                    type="text" name="username" />
                                  <ErrorMessage name="username" component="div"
                                    className="alert alert-danger"/>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                      <label className="small mb-1" htmlFor="inputFirstName">
                                        Primeiro Nome
                                      </label>
                                      <Field className="form-control" id="inputFirstName" type="text"
                                        placeholder="Enter your first name" name="firstName" />
                                      <ErrorMessage name="firstName" component="div"
                                        className="alert alert-danger" />
                                    </div>

                                    <div className="col-md-6">
                                      <label className="small mb-1" htmlFor="inputLastName">Sobrenome</label>
                                      <Field className="form-control" id="inputLastName" type="text"
                                        name="lastName" placeholder="Enter your last name" />
                                      <ErrorMessage name="lastName" component="div"
                                        className="alert alert-danger" />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                      <label htmlFor="quantity">Idade</label>
                                      <Field type="number" id="quantity" name="idade" min="16"
                                        max="100" />
                                      <ErrorMessage name="idade" component="div"
                                        className="alert alert-danger" />
                                    </div>
                                    <div className="col-md-6">
                                      <label className="small mb-1" htmlFor="inputSexo">Sexo</label>
                                      <Field className="custom-select my-1 mr-sm-2" name="sexo" as="select">
                                        <option value={""} disabled>Informe seu sexo</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="outro">Outro</option>
                                        <option value="outro">Prefiro não informar</option>
                                      </Field>
                                      <ErrorMessage name="sexo" component="div"
                                        className="alert alert-danger" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                  <label className="small mb-1" htmlFor="inputEmailAddress">
                                    Email address
                                  </label>
                                  <Field className="form-control" id="inputEmailAddress"
                                    placeholder="Enter your email address"
                                    type="email" name="email" />
                                  <ErrorMessage name="email" component="div"
                                    className="alert alert-danger" />
                                </div>

                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputObjetivo">Objetivo</label>
                                    <Field name="objetivo" as="select" className="custom-select my-1 mr-sm-2">
                                      <option value={""} disabled>Selecione o objetivo...</option>
                                      {objetivosOptions}
                                    </Field>
                                  </div>
                                  <ErrorMessage name="objetivo" component="div"
                                    className="alert alert-danger"/>
                                </div>
                                
                                <button className="btn btn-primary" type="submit" id="botao">
                                      Salvar
                                </button>
                            </div>
                          {message && 
                            ( 
                                <div className="form-group">
                                      <div className={  successful ? "alert alert-success" : 
                                                        "alert alert-danger" }
                                        role="alert">
                                        {message}
                                      </div>
                                </div>
                              )}
                        </Form>
                    </Formik>
                </div>
            </div>
            </div>
        </div>
</div>
  );
};

export default Profile;


