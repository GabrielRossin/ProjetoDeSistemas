import {Form, Formik, ErrorMessage, Field} from "formik";
import React,{ useState } from "react";
import {registerFeedback } from "../services/auth.service";
import * as Yup from "yup";
import '../styles/Feedback/feedback.css'
import ImageFeedback from '../assets/feedback/img-01.png'
import Ifb from "../types/feedback.type";
import { getCurrentUser } from "../services/auth.service";
import SemPermissao from "./SemPermissao";

const Feedback: React.FC = () => {
  
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  if(getCurrentUser() === null)
  {
    return(<SemPermissao/>);
  }

  const escolhas = ["SUGESTÃO", "ELOGIO", "CRÍTICA", "OUTRO"];
  
  
  const initialValues: Ifb = {
    mensagem : "",
    assunto: ""
  };

  

  const validationSchema = Yup.object().shape({
    mensagem: Yup.string().trim()
      .test(
        "len",
        "A mensagem deve ter de 10 a 2000 caracteres",
        (val: any) =>
          val &&
          val.toString().length >= 10 &&
          val.toString().length <= 2000
      )
      .required("Este campo é obrigatório!"),
    assunto: Yup.string()
      .required("Escolha o tema")
      .oneOf(escolhas),
  });

  const escolhasOptions = escolhas.map((escolhas, key) => (
    <option value={escolhas} key={key}>
      {escolhas}
    </option>
  ));

  const handleRegister = (formValue: Ifb) => {
    const { mensagem, assunto } = formValue;

    registerFeedback(mensagem, assunto ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
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
      }
    );
  };

  
return(
  <div>
      <div className="contact1">
      <div className="container-contact1">

          <div className="contact1-pic js-tilt" data-tilt>
                <img src={ImageFeedback} alt="IMG"/>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
          <Form className="contact1-form validate-form">
            
              <span className="contact1-form-title">
                      FEEDBACK
              </span>

              {!successful && (
              <div>

                <div className="form-group">
                  <label id="label" htmlFor="assunto"> Assunto </label>
                  <Field name="assunto" as="select" className="custom-select my-1 mr-sm-2">
                       <option value={""} disabled>Selecione o assunto...</option>
                        {escolhasOptions}
                  </Field>
                  <ErrorMessage
                        name="assunto"
                        component="div"
                        className="alert alert-danger"
                      />
                </div>

                <div className="form-group">
                    <label id="label" htmlFor="mensagem"> Mensagem </label>
                    <Field as="textarea" name="mensagem" className="form-control" id="textarea"/>
                    <ErrorMessage
                        name="mensagem"
                        component="textarea"
                        className="alert alert-danger"
                      />
                </div>

                <div className="form-group-button">
                  <button type="submit" className="btnEnviar">Enviar</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group" >
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  Feedback enviado
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
</div>     
    )
}
export default Feedback;