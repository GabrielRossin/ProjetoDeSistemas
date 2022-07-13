import React, { useState } from "react";
import NavbarInternoSettings from "./NavBarInternoSettings";
import Modal from '@mui/material/Modal'
import { Button, Box, Typography } from "@mui/material";
import '../styles/Settings/Settings.css'
import DeleteIcon from '@mui/icons-material/Delete';
import PasswordIcon from '@mui/icons-material/Password';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { IS } from "../types/settings.type";
import { changePassword, deleteAccount, getCurrentUser, report} from "../services/auth.service";
import * as AuthService from "../services/auth.service";
import { IDP } from "../types/deleteProfile.type";
import { IR } from "../types/report.type";
import { Link} from "react-router-dom";
import SemPermissao from "./SemPermissao";


const Settings: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [successful, setSuccessful ]= useState<boolean>(false);
    const [successful1, setSuccessful1 ]= useState<boolean>(false);

    const [send, setSend] = useState<boolean>(false);
    const [desabilitado,setDesabilitado] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const currentUser = getCurrentUser();

    if(getCurrentUser()=== null) {
      return(<SemPermissao/>);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const initialValues: IS = {
        username: currentUser.username,
        passwordAtual:"",
        password: "",
      };
    
    const initialValues1: IDP = {
       username: currentUser.username,
       passwordAtual: ""
    }
    

    const initialValues2: IR = {
      mensagem: ""
  }

    const validationSchema = Yup.object().shape({
        passwordAtual: Yup.string().trim().required("Este campo é obrigatório!"),
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

    const validationSchema1 = Yup.object().shape({
      passwordAtual: Yup.string().trim().required("Este campo é obrigatório!"),
  });

  
  const validationSchema2 = Yup.object().shape({
    mensagem: Yup.string().trim()
      .test(
        "len",
        "A mensagem deve ter de 10 a 255 caracteres",
        (val: any) =>
          val &&
          val.toString().length >= 10 &&
          val.toString().length <= 255
      )
      .required("Este campo é obrigatório!"),
  });


    const handleRegister = (formValue: IS) => {
        const {password, username, passwordAtual} = formValue;
        setDesabilitado(true)
        changePassword(password, username, passwordAtual).then(
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
              setDesabilitado(false);
            }
            
          );
    };
    
    const handleRegister1 = (formValue: IDP) => {
     
      const {username, passwordAtual} = formValue;
      setDesabilitado(true)
      deleteAccount(username, passwordAtual).then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful1(true);
            setSend(true);
            AuthService.logout();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
            setMessage(resMessage);
            setSuccessful1(false);
            setSend(false);
            setDesabilitado(false);
          }
        );
  };

  const handleRegister2 = (formValue: IR) => {
     
    const {mensagem} = formValue;
    setDesabilitado(true)
    report(mensagem).then(
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
          setDesabilitado(false);
        }
      );
  };


return(<> 

<div className="row">
  
     <div className="col-xl-3 col-sm-6 col-12"> 
          <div className="card card-content" id="cardPassword">
               <div className="card-body media d-flex">
                    <div className="align-self-center">
                          <PasswordIcon fontSize="large"/>
                     </div>
                     <div className="media-body text-right">
                          <Button className="btn btn-primary"
                                  onClick={handleOpen} 
                                  id="btnTrash">   
                                  Trocar Senha
                            </Button>
                      </div>  
                </div>
           </div>
       </div>

      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card" id="cardDelete">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                <DeleteIcon fontSize="large"/>
                </div>
                <div className="media-body text-right">
                <Button className="btn btn-primary"onClick={handleOpen1} id="btnTrash">   
                            Excluir Conta
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 col-12"> 
          <div className="card card-content" id="cardReport">
               <div className="card-body media d-flex">
                    <div className="align-self-center">
                          <ReportProblemIcon fontSize="large"/>
                     </div>
                     <div className="media-body text-right">
                          <Button className="btn btn-primary"
                                  onClick={handleOpen2} 
                                  id="btnTrash">   
                                  Relatar Problema
                            </Button>
                      </div>  
                </div>
           </div>
       </div>


</div> 


        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    TROCAR SENHA
                </Typography>
                <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                >
                     <Form>
                             <>
                                  <div className="form-group">
                                      <label htmlFor="password"> Senha Atual </label>
                                      <Field
                                          name="passwordAtual"
                                          type="password"
                                          className="form-control" />
                                      <ErrorMessage
                                          name="passwordAtual"
                                          component="div"
                                          className="alert alert-danger" />
                                  </div>
                                  <label htmlFor="password"> NOVA SENHA </label><Field
                                          name="password"
                                          type="password"
                                          className="form-control" /><ErrorMessage
                                          name="password"
                                          component="div"
                                          className="alert alert-danger" />
                                   <div className="form-imput">
                                      <button type="submit" className="btn btn-primary btn-block" 
                                              disabled={desabilitado}>
                                        <span>TROCAR SENHA</span>
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
                            </>
                    </Form>
                </Formik>
            </Box>
        </Modal>

        <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    EXCLUIR CONTA
                </Typography>
                <Formik
                        initialValues={initialValues1}
                        validationSchema={validationSchema1 }
                        onSubmit={handleRegister1}
                >
                     <Form>
                             <>
                             {!successful1 && (
                                  <><div className="form-group">
                                    <label htmlFor="password"> Senha Atual </label>
                                    <Field
                                      name="passwordAtual"
                                      type="password"
                                      className="form-control" />
                                    <ErrorMessage
                                      name="passwordAtual"
                                      component="div"
                                      className="alert alert-danger" />
                                  </div><div className="form-imput">
                                      <button type="submit" className="btn btn-primary btn-block"
                                        disabled={desabilitado}>
                                        <span>Excluir Conta</span>
                                      </button>
                                    </div></>
                             )}
                              {message && 
                              ( 
                                  <>
                                  <div className="form-group">
                                    <div className={successful1 ? "alert alert-success" :
                                      "alert alert-danger"}
                                      role="alert">
                                      {message}
                                    </div>
                                  </div>
                                  <button>
                                      <Link to={"/login"}>
                                        OK
                                      </Link>
                                  </button>
                                  
                                  </>
                              )}
                            </>
                    </Form>
                </Formik>
            </Box>
        </Modal>

        <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    Reportar problema
                </Typography>
                <Formik
                        initialValues={initialValues2}
                        validationSchema={validationSchema2 }
                        onSubmit={handleRegister2}
                >
                     <Form>
                             <>
                                <div className="form-group">
                                    <label id="label" htmlFor="mensagem"> Mensagem </label>
                                    <Field as="textarea" name="mensagem" className="form-control" 
                                        id="textarea"/>
                                        <ErrorMessage
                                            name="mensagem"
                                            component="textarea"
                                            className="alert alert-danger"
                                          />
                                  </div>

                                   <div className="form-imput">
                                      <button type="submit" className="btn btn-primary btn-block" 
                                              disabled={desabilitado}>
                                        <span>Enviar</span>
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
                            </>
                    </Form>
                </Formik>
            </Box>
        </Modal>




    </>)
}

export default Settings;