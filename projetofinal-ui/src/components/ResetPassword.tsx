import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { resetPassword } from "../services/auth.service";
import IRP from "../types/resetPassword.type";

const ResetPassword: React.FC = () => {

    const [successful, setSuccessful ]= useState<boolean>(false);
    const [send, setSend] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
  
    const initialValues: IRP = {
      password: "",
    };
  
    const validationSchema = Yup.object().shape({
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  
    const handleRegister = (formValue: IRP) => {
      const { password } = formValue;
  
      resetPassword(password).then(
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
  
return(

<div className="modal-dialog">
     <div className="modal-content">
          <div className="modal-header"> <h1 id="h1" className="text-center">Trocar Senha</h1> </div>
          <div className="modal-body">
            <div className="col-md-12">
                 <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                            <p>Se você esqueceu sua senha, você pode redefini-la aqui.</p>
                              <div className="panel-body">
                                <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleRegister}>
                                   <Form>
                                      <div className="form-group" placeholder="Enter your new password">
                                            <Field
                                                    name="password"
                                                    type="password"
                                                    className="form-control"/>
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                      </div>
                                      
                                      <div className="form-group">
                                            <button type="submit" 
                                                    className="btn btn-primary btn-block" 
                                                    disabled={send}>
                                                    {send && (
                                                        <span className="spinner-border spinner-border-sm"></span>
                                                    )}
                                                Cadastrar
                                          </button>
                                    </div>
                                    {message && (
                                                    <div className="form-group">
                                                        <div
                                                        className={
                                                            successful ? "alert alert-success" : "alert alert-danger"
                                                        }
                                                        role="alert"
                                                        >
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
     </div>

        <div className="modal-footer">
            <div className="col-md-12">
                <button className="btn" data-dismiss="modal" aria-hidden="true">Cancelar</button>
            </div>	
        </div>

    </div>
</div>
)
    

}

export default ResetPassword;