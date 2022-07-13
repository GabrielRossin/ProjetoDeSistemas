
import { ErrorMessage, Field, Form, Formik } from "formik";
//import { send } from "process";
import React, { useState } from "react";
import { forgotPassword } from "../services/auth.service";
import '../styles/ForgotPassoword/ForgotPassword.css';
import IFP from "../types/forgotPassword.type";
import * as Yup from "yup";

const ForgotPassword: React.FC = () =>
{

    const [successful, setSuccessful ]= useState<boolean>(false);
    const [send, setSend] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
  
    const initialValues: IFP = {
      email: "",
    };
  
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
    });
  
    const handleRegister = (formValue: IFP) => {
      const { email } = formValue;
  
      forgotPassword(email).then(
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

// var serverContext : [[@{/}]];
// function resetPass(){
//     var email = $("#email").val();
//     $.post(serverContext + "user/resetPassword",{email: email} ,
//       function(data){
//           window.location.href = 
//            serverContext + "login?message=" + data.message;
//     })
//     .fail(function(data) {
//     	if(data.responseJSON.error.indexOf("MailError") > -1)
//         {
//             window.location.href = serverContext + "emailError.html";
//         }
//         else{
//             window.location.href = 
//               serverContext + "login?message=" + data.responseJSON.message;
//         }
//     });
// }


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
                                     <div className="form-group">
                                           <Field
                                                   name="email"
                                                   type="email"
                                                   className="form-control"
                                                   placeholder = "email"
                                                   />
                                           <ErrorMessage
                                               name="email"
                                               component="div"
                                               className="alert alert-danger"
                                           />
                                     </div>
                                     
                                     <div className="form-group">
                                           <button type="submit" 
                                                   className="btn btn-primary btn-block" 
                                                   //onClick={resetPass()}
                                                   >
                                            
                                               Enviar
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
export default ForgotPassword;