import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { createFormProfile, getCurrentUser} from "../services/auth.service";
import { ICFP } from "../types/createFormProfile.type";
import Navbar from "./Navbar";

import '../styles/CreateFormProfile/CreateFormProfile.css';
import { Redirect } from "react-router-dom";

const CreateFormProfile: React.FC = () => {

    const [successful, setSuccessful ]= useState<boolean>(false);
    const [send, setSend] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const objetivos = ["Emagrecer", "Ganhar Massa", "Definir Músculos"];

    if(getCurrentUser() !== null) {

      return ( <Redirect to={'/profile'} />
      )
    }

    const initialValues: ICFP = {
       username: "" , firstName: "",  lastName: "", idade:0 , sexo: "", objetivo: ""
      };

      const objetivosOptions = objetivos.map((objetivos, key) => (
        <option value={objetivos} key={key}>
          {objetivos}
        </option>
      ));
      

      const validationSchema = Yup.object().shape({
        firstName: Yup.string().trim()
        .test(
          "len",
          "O primeiro nome deve ter entre 3 e 200 caracteres.",
          (val: any) =>
            val &&
            val.toString().length >= 3 && val.toString().length <= 200
        ).required("Este campo é obrigatório!"),
    
        lastName: Yup.string().trim()
        .test(
          "len",
          "O sobrenome deve ter entre 3 e 200 caracteres.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&  val.toString().length <= 200
        ).required("Este campo é obrigatório!"),
    
         idade: Yup.number().min(16).max(100)
       .required("Este campo é obrigatório!"),
    
        objetivo: Yup.string()
        .required("Este campo é obrigatório!")
        .oneOf(objetivos),
      })

      const handleRegister = (formValue: ICFP) => {
        const {username,firstName, lastName, idade, objetivo, sexo} = formValue;
        
        
    createFormProfile(username,firstName, lastName, idade, objetivo, sexo).then(
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
}

    return(
    <div>
      <Navbar/>
        <div className="col-xl-8">
            <div className="col-xl-8">
                <div className="card mb-4">
                    <div className="card-header">Detalhes da conta</div>
                    <div className="card-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleRegister}
                        >
                          <Form>
                          {!successful && (
                            <div>
                                  <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName"> 
                                                Primeiro Nome
                                        </label>
                                        <Field className="form-control" id="inputFirstName" type="text" 
                                                placeholder="Digite seu primeiro nome" name="firstName" 
                                                />
                                        <ErrorMessage name="firstName" component="div" 
                                                      className="alert alert-danger"/>
                                        
                                  </div>
                        
                               <div className="col-md-6">
                                   <label className="small mb-1" htmlFor="inputLastName">Sobrenome</label>
                                   <Field className="form-control" id="inputLastName" type="text"  
                                           name="lastName" placeholder="Digite seu sobrenome"/>
                                    <ErrorMessage name="lastName" component="div" 
                                                className="alert alert-danger" />
                               </div>
                                  </div>  
    
                                  <div className="row gx-3 mb-3">
                                      <div className="col-md-6" >
                                            <label htmlFor="quantity">Idade</label>
                                            <Field type="number" id="quantity" name="idade" min="16" 
                                              max="100"/>
                                              
                                            <ErrorMessage name="idade" component="div" 
                                                          className="alert alert-danger" /> 
                                        </div>
                                  
                                    
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputSexo">Sexo</label>
                                        <Field className="custom-select my-1 mr-sm-2" name= "sexo" as="select">
                                                <option value={""} disabled>Informe seu sexo</option>
                                                <option value="masculino">Masculino</option>
                                                <option value="feminino">Feminino</option>
                                                <option value="outro">Outro</option>
                                                <option value="outro">Prefiro não informar</option>
                                        </Field>
                                    </div>
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
                                                    className="alert alert-danger" />
                                  </div>
                          
                                  <button className="btn btn-primary" type="submit">
                                        {send && (<span className="spinner-border spinner-border-sm"/>)}
                                        Salvar
                                  </button>
                           </div>
                          )}

                          <div className="cfp">
                              {message && 
                                ( 
                                    
                                    <div className="form-group" id="cfp">
                                          <div className={  successful ? "alert alert-success" : 
                                                            "alert alert-danger" }
                                            role="alert">
                                            Perfil cadastrado com sucesso
                                          </div>
                                        </div>
                                  )}
                          </div>
                           
                         
                          </Form>
                        </Formik>
                    </div>
                </div>
                </div>
            </div>
    </div>
    )
}

export default CreateFormProfile