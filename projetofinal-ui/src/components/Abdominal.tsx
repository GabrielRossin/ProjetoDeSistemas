import abdominalRussoGif from '../assets/abdminal/iniciante/Russian-Twist.gif'
import abdominalRusso from '../assets/abdminal/iniciante/abdominalRusso.jpg'
import montanhaGif from '../assets/abdminal/iniciante/montanha.gif'
import montanha from '../assets/abdminal/iniciante/montanha.jpg'
import abdominalGif from '../assets/abdminal/iniciante/abdomial .gif'
import abdominal from '../assets/abdminal/iniciante/abdominal.jpg'
import hellTouchGif from '../assets/abdminal/iniciante/_heel_touchers_illustration.gif'
import hellTouch from '../assets/abdminal/iniciante/heelTouch.jpg'
import legRaisesGif from '../assets/abdminal/iniciante/legRaises.gif'
import legRaises from '../assets/abdminal/iniciante/legRaises.jpg'
import prancha from '../assets/abdminal/iniciante/prancha.jpg'
import cobra from '../assets/abdminal/iniciante/abdominal-stretch.gif'
import cruzadoGif from '../assets/abdminal/intermediario/abdominal cruzado-illustration.gif'
import cruzado from '../assets/abdminal/intermediario/abdominal cruzado.jpg'
import ponteEsquerdoGif from '../assets/abdminal/intermediario/ponteLateralEsquerda-illustration.gif'
import ponteEsquerdo from '../assets/abdminal/intermediario/ponteEsquerdo.jpg'
import ponteDireitaGif from '../assets/abdminal/intermediario/ponteDireito.gif'
import ponteDireita from '../assets/abdminal/intermediario/ponteDireitojpg.jpg'
import ponteNadegasGif from '../assets/abdminal/intermediario/glute-bridge-exercise-illustration-spotebi.gif'
import ponteNadegas from '../assets/abdminal/intermediario/PONTENADEGASjpg.jpg'
import bicycleGif from '../assets/abdminal/intermediario/abdominal cruzado-illustration.gif'
import bicycle from '../assets/abdminal/intermediario/bicycle.jpg'
import vGif from '../assets/abdminal/intermediario/VPARACIMA.gif'
import v from '../assets/abdminal/intermediario/V_PARA_CIMA.jpg'
import senteUpsGif from '../assets/abdminal/avançado/workout-abs.gif'
import senteUp from '../assets/abdminal/avançado/SENTEUPS.jpg'
import { Link } from "react-router-dom"
import {getCurrentUser} from "../services/auth.service";
import SemPermissao from "./SemPermissao";
import React from 'react';
import { Box, Modal, Tab, Typography } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import  '../styles/abdominal/abdominal.css'  

const Abdominal: React.FC = () =>
{

    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);
    const [open10, setOpen10] = React.useState(false);
    const [open11, setOpen11] = React.useState(false);
    const [open12, setOpen12] = React.useState(false);
    const [open13, setOpen13] = React.useState(false);

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
  
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false)

    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false)

    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false)

    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false)

    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false)

    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false)

    const handleOpen8 = () => setOpen8(true);
    const handleClose8 = () => setOpen8(false)

    const handleOpen9 = () => setOpen9(true);
    const handleClose9 = () => setOpen9(false)

    const handleOpen10 = () => setOpen10(true);
    const handleClose10 = () => setOpen10(false)

    const handleOpen11 = () => setOpen11(true);
    const handleClose11 = () => setOpen11(false)

    const handleOpen12 = () => setOpen12(true);
    const handleClose12 = () => setOpen12(false)

    const handleOpen13 = () => setOpen13(true);
    const handleClose13 = () => setOpen13(false)

    if(getCurrentUser()=== null) {
    return(<SemPermissao/>);
  }


return(<>

<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Iniciante"     value="1" />
                    <Tab label="Intermediário" value="2" />
                    <Tab label="Avançado"      value="3" />
                </TabList>
            </Box>

        <TabPanel value="1">
            <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={abdominal} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={abdominalRusso} className='card-img-top' alt="" />
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL RUSSO</h5>
                            <p>20X</p>
                            <Link to={'/abdominal'} className="stretched-link" onClick={handleOpen}>
                            </Link>
                        </div>
                    </div>

                     <div className='card' id='cardIniciante'>
                            <img src={montanha} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen1}>
                                    </Link> 
                             </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={abdominalRusso} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL RUSSO</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={hellTouch} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen3}>
                                </Link> 
                        </div>
                    </div>
            </div>

            <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={legRaises} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen4}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={prancha} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">PRANCHA</h5>
                            <p>20s</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen5}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={abdominal} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                </Link> 
                        </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={montanha} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen1}>
                                    </Link> 
                             </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={hellTouch} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen3}>
                                </Link> 
                        </div>
                    </div>
            </div>
            
            <div className='card-deck'>
                    <div className="card" id="cardIniciante">
                        <img src={legRaises} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen4}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={prancha} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">PRANCHA</h5>
                            <p>20s</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen5}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={cobra} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ALONGAMENTO COBRA</h5>
                            <p>30s</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen6}>
                                </Link> 
                        </div>
                    </div>

            </div>
        </TabPanel>

        <TabPanel value="2">
                <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={hellTouch} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>26X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen3}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={cruzado} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL CRUZADO</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen7}>
                                </Link> 
                        </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={montanha} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>20X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen1}>
                                    </Link> 
                             </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={ponteEsquerdo} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">PONTE LATERAL ESQUERDA</h5>
                                    <p>12X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen8}>
                                    </Link> 
                             </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={ponteDireita} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">PONTE LATERAL DIREITA</h5>
                                    <p>12X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen9}>
                                    </Link> 
                             </div>
                    </div>

                </div>

                <div className='card-deck'>

                        <div className="card" id="cardIniciante">
                            <img src={ponteNadegas} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">PONTE DE NÁDEGAS</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen10}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={bicycle} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL DE BICICLETA</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen11}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={v} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">V PARA CIMA</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen12}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={hellTouch} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={abdominal} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>

                </div>
          
                <div className='card-deck'>

                        <div className="card" id="cardIniciante">
                            <img src={prancha} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">PRANCHA</h5>
                                <p>20s</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={cruzado} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL CRUZADO</h5>
                                <p>20X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen7}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={legRaises} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen4}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={bicycle} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL DE BICICLETA</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen11}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={abdominal} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>
                </div>
        </TabPanel>

        <TabPanel value="3">

                 <div className='card-deck'>

                        <div className="card" id="cardIniciante">
                            <img src={senteUp} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">SENTE-UPS</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen13}>
                                    </Link> 
                            </div>
                        </div>

                        <div className='card' id='cardIniciante'>
                                <img src={ponteEsquerdo} className='card-img-top' alt='...'></img>
                                    <div className="card-body">
                                        <h5 className="card-title">PONTE LATERAL ESQUERDA</h5>
                                        <p>12X</p>
                                        <Link className="stretched-link" to={"/abdominal"} 
                                            onClick={handleOpen8}>
                                        </Link> 
                                </div>
                        </div>

                        <div className='card' id='cardIniciante'>
                                <img src={ponteDireita} className='card-img-top' alt='...'></img>
                                    <div className="card-body">
                                        <h5 className="card-title">PONTE LATERAL DIREITA</h5>
                                        <p>12X</p>
                                        <Link className="stretched-link" to={"/abdominal"} 
                                            onClick={handleOpen9}>
                                        </Link> 
                                </div>
                        </div>

                        <div className="card" id="cardIniciante">
                                <img src={abdominal} className="card-img-top" alt="..." ></img>
                                <div className="card-body">
                                    <h5 className="card-title">ABDOMINAL</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                        </Link> 
                                </div>
                        </div>

                        <div className="card" id="cardIniciante">
                                <img src={bicycle} className="card-img-top" alt="..." ></img>
                                <div className="card-body">
                                    <h5 className="card-title">ABDOMINAL DE BICICLETA</h5>
                                    <p>26X</p>
                                    <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen11}>
                                        </Link> 
                                </div>
                        </div>

                 </div>

                 <div className='card-deck'>

                        <div className="card" id="cardIniciante">
                            <img src={v} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">V PARA CIMA</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen12}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                                <img src={abdominalRusso} className='card-img-top' alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">ABDOMINAL RUSSO</h5>
                                    <p>20X</p>
                                    <Link to={'/abdominal'} className="stretched-link" onClick={handleOpen}>
                                    </Link>
                                </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={abdominal} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ABDOMINAL</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={hellTouch} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                                <p>26X</p>
                                <Link className="stretched-link" to={"/abdominal"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className='card' id='cardIniciante'>
                            <img src={montanha} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>20X</p>
                                    <Link className="stretched-link" to={"/abdominal"} 
                                          onClick={handleOpen1}>
                                    </Link> 
                             </div>
                        </div>

                 </div>
        </TabPanel>
      </TabContext>
</Box>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ABDOMINAL RUSSO
                </Typography>
                <img src={abdominalRussoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Sente-se no chão com os joelhos dobrados, os pés um pouco levantados e as
                            costas inclinadadas para trás.
                            <br></br>
                            Em seguida, segure as mãos e mova o tronco de um lado para outro
                </Typography>
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
                    MONTANHA
                </Typography>
                <img src={montanhaGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Comece com a posicação de flexão, leve o joelho direito na direção do peito,
                            salte ao trocar de pé no ar trazendo o pé esquerdo para dentreo e o direito
                            para fora.
                            <br></br>
                            Este exercicio fortalece vários grupos musculares além do sistema cardiovascular
                </Typography>
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
                    ABDOMINAL
                </Typography>
                <img src={abdominalGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Deite de costas cos os joelhos dobrados e os braços esticados para frente.
                            <br></br>
                            Levante a parte superior do corpo tirando-a do chão. Mantenha erguida por
                            alguns segundos e retorne lentamente.
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    TOQUE DE CALCANHAR
                </Typography>
                <img src={hellTouchGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Deite no chão com suas pernas dobradas e seus braços ao lado corpo
                            <br></br>
                            Levante umm pouco a parte superior do corpo distanciando do chão e faça 
                            com que suas mãos roquem nos calcanhares alternadamente
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open4}
            onClose={handleClose4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ELEVAÇÃO DE PERNAS
                </Typography>
                <img src={legRaisesGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite-se de costas com as mãos ao lado do corpo ou embaixo dos glúteos. 
                             Mantenha as pernas retas ou levemente dobradas.
                            <br></br>
                            Em seguida, levante as pernas até formar ou quase formar um L com o corpo
                            <br></br>
                            Baixe as pernas lentamente e repita o exercício
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open5}
            onClose={handleClose5}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    PRANCHA
                </Typography>
                <img src={prancha} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Mantenha a posição de flexão com o peso do corpo sustentado pelos
                             antebraços, cotovelos e dedos dos pés
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open6}
            onClose={handleClose6}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ALONGAMENTO COBRA
                </Typography>
                <img src={cobra} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite-se de bruços e dobr seus cotovelos com as mão debaixo dos ombros
                            <br></br>
                            Empurre o peito afastando-o o máximo possível do chão. Fique nessa possição 
                            por alguns segundos
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open7}
            onClose={handleClose7}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ABDOMINAL CRUZADO
                </Typography>
                <img src={cruzadoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite-se de costas com seus joelhos dobrados e com suas mãos atrás das
                             orelhas
                            <br></br>
                            Levante e gire seu tronco de modo que seu cotovelo direito mova-se na direção
                            do seu joelho esquerdo. Repita com o outro lado
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open8}
            onClose={handleClose8}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    PONTE LATERAL ESQUERDA
                </Typography>
                <img src={ponteEsquerdoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite sobre o lado direito. Coloque o cotovelo direito alinhado abaixo do ombro
                             e coloque a mão esquerda na cintura. Coloque a perna esquerda sobre a perna direita
                            <br></br>
                            Erga o quadril, mantenha a posição durante 2-4 segundos e volte a posição inical
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open9}
            onClose={handleClose9}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    PONTE LATERAL DIREITA
                </Typography>
                <img src={ponteDireitaGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite sobre o lado esquerdo. Coloque o cotovelo esquerdo alinhado abaixo 
                             do ombro
                             e coloque a mão direita na cintura. Coloque a perna direita sobre a perna 
                             direita
                            <br></br>
                            Erga o quadril, mantenha a posição durante 2-4 segundos e volte a posição 
                            inical
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open10}
            onClose={handleClose10}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    PONTE DE NÁDEGAS
                </Typography>
                <img src={ponteNadegasGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite-se direito e dobre os joelhos com os pés apoiados no chão. Coloque os
                             braços igualmente apoiados, de ambos os lados
                            <br></br>
                            Em seguida, levante as nádegas do chão, tão alto quanto possível, em forma de
                            ponte
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open11}
            onClose={handleClose11}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ABDMINAL DE BICICLETA
                </Typography>
                <img src={bicycleGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                         Deite-se de costas, levante os ombros do tapete e levante ambas as pernas.
                         Aproxime um joelho e o cotovelo oposto um do outro, fazendo uma trituração 
                         para um lado, e estenda totalmente a outra perna.
                            <br></br>
                        Retorne à posição inicial e depois faça o crunch para o lado oposto.
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open12}
            onClose={handleClose12}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    V PARA CIMA
                </Typography>
                <img src={vGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open13}
            onClose={handleClose13}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                   SENTE-UPS
                </Typography>
                <img src={senteUpsGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se de costas com as mãos atrás da cabeça. Em seguida, levante o tronco do chão
                o máximo possével
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

    </>)
}

export default Abdominal