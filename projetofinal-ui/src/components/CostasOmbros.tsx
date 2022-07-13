import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/auth.service";
import SemPermissao from "./SemPermissao";

import armRaiseGif from '../assets/costas e ombros/arm raise arms beginner.gif'
import armRaise from '../assets/costas e ombros/arm raise arms beginner.jpg'
import catGif from '../assets/costas e ombros/cat-back-stretch-exercise-illustration.gif'
import cat from '../assets/costas e ombros/cat.jpg'
import childPose  from '../assets/costas e ombros/child-pose.jpg'
import imagine from '../assets/costas e ombros/image_iphone.jpg'
import impoliteGif from '../assets/costas e ombros/ImpoliteTediousIncatern-max-1mb.gif'
import impolite from '../assets/costas e ombros/ImpoliteTediousIncatern-max-1mb.jpg'
import pikeGif from '../assets/costas e ombros/pike-push-up-exercise-illustration-spotebi.gif'
import pike from '../assets/costas e ombros/pike.jpg'
import proneGif from '../assets/costas e ombros/prone triceps pushupe.gif'
import prone from '../assets/costas e ombros/prone triceps pushupe.jpg'
import reclinegGif from '../assets/costas e ombros/reclined romboid squeeze.gif'
import reclineg from '../assets/costas e ombros/reclined romboid squeeze.jpg'
import rhomboidGif from '../assets/costas e ombros/rhomboid pulls.gif'
import rhomboid from '../assets/costas e ombros/rhomboid pulls.jpg'
import sideArmGif from '../assets/costas e ombros/side arm raise.gif'
import sideArm from '../assets/costas e ombros/side arm raise.jpg'
import stretchRight from '../assets/costas e ombros/side lying floor stretch right.jpg'
import stretch from '../assets/costas e ombros/side lying floor stretch.jpg'
const CostasOmbros: React.FC = () => {


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
                    <img src={armRaise} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={cat} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link to={'/costasombros'} className="stretched-link" onClick={handleOpen1}>
                        </Link>
                    </div>
                </div>

                <div className='card' id='cardIniciante'>
                        <img src={childPose} className='card-img-top' alt='...'></img>
                            <div className="card-body">
                                <h5 className="card-title">MONTANHA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/costasombros"} 
                                    onClick={handleOpen2}>
                                </Link> 
                        </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={imagine} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen3}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
                            </Link> 
                    </div>
                </div>

            </div>

            <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={pike} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen5}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={prone} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">PRANCHA</h5>
                            <p>20s</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen6}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={reclineg} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen7}>
                                </Link> 
                        </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={rhomboid} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/costasombros"} 
                                        onClick={handleOpen8}>
                                    </Link> 
                            </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={sideArm} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen9}>
                                </Link> 
                        </div>
                    </div>
            </div>

            <div className='card-deck'>

                <div className="card" id="cardIniciante">
                    <img src={stretchRight} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen10}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                <img src={stretch} className="card-img-top" alt="..." ></img>
                <div className="card-body">
                    <h5 className="card-title">PRANCHA</h5>
                    <p>20s</p>
                    <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen11}>
                        </Link> 
                </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ALONGAMENTO COBRA</h5>
                        <p>30s</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
                            </Link> 
                    </div>
                </div>

    </div>
              
              
        </TabPanel>

        <TabPanel value="2">
            <div className='card-deck'>

                <div className="card" id="cardIniciante">
                    <img src={armRaise} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={cat} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link to={'/costasombros'} className="stretched-link" onClick={handleOpen1}>
                        </Link>
                    </div>
                </div>

                <div className='card' id='cardIniciante'>
                        <img src={childPose} className='card-img-top' alt='...'></img>
                            <div className="card-body">
                                <h5 className="card-title">MONTANHA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/costasombros"} 
                                    onClick={handleOpen2}>
                                </Link> 
                        </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={imagine} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen3}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
                            </Link> 
                    </div>
                </div>

            </div>

            <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={pike} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen5}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={prone} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">PRANCHA</h5>
                            <p>20s</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen6}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={reclineg} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen7}>
                                </Link> 
                        </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={rhomboid} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/costasombros"} 
                                        onClick={handleOpen8}>
                                    </Link> 
                            </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={sideArm} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen9}>
                                </Link> 
                        </div>
                    </div>
            </div>

            <div className='card-deck'>

                <div className="card" id="cardIniciante">
                    <img src={stretchRight} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen10}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                <img src={stretch} className="card-img-top" alt="..." ></img>
                <div className="card-body">
                    <h5 className="card-title">PRANCHA</h5>
                    <p>20s</p>
                    <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen11}>
                        </Link> 
                </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ALONGAMENTO COBRA</h5>
                        <p>30s</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
                            </Link> 
                    </div>
                </div>

    </div>
              
              
        </TabPanel>

        <TabPanel value="3">
            <div className='card-deck'>

                <div className="card" id="cardIniciante">
                    <img src={armRaise} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={cat} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link to={'/costasombros'} className="stretched-link" onClick={handleOpen1}>
                        </Link>
                    </div>
                </div>

                <div className='card' id='cardIniciante'>
                        <img src={childPose} className='card-img-top' alt='...'></img>
                            <div className="card-body">
                                <h5 className="card-title">MONTANHA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/costasombros"} 
                                    onClick={handleOpen2}>
                                </Link> 
                        </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={imagine} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ABDOMINAL RUSSO</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen3}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                        <p>20X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
                            </Link> 
                    </div>
                </div>

            </div>

            <div className='card-deck'>

                    <div className="card" id="cardIniciante">
                        <img src={pike} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen5}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={prone} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">PRANCHA</h5>
                            <p>20s</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen6}>
                                </Link> 
                        </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={reclineg} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">ABDOMINAL</h5>
                            <p>16X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen7}>
                                </Link> 
                        </div>
                    </div>

                    <div className='card' id='cardIniciante'>
                            <img src={rhomboid} className='card-img-top' alt='...'></img>
                                <div className="card-body">
                                    <h5 className="card-title">MONTANHA</h5>
                                    <p>16X</p>
                                    <Link className="stretched-link" to={"/costasombros"} 
                                        onClick={handleOpen8}>
                                    </Link> 
                            </div>
                    </div>

                    <div className="card" id="cardIniciante">
                        <img src={sideArm} className="card-img-top" alt="..." ></img>
                        <div className="card-body">
                            <h5 className="card-title">TOQUE DE CALCANHAR</h5>
                            <p>20X</p>
                            <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen9}>
                                </Link> 
                        </div>
                    </div>
            </div>

            <div className='card-deck'>

                <div className="card" id="cardIniciante">
                    <img src={stretchRight} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ELEVAÇÃO DE PERNAS</h5>
                        <p>16X</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen10}>
                            </Link> 
                    </div>
                </div>

                <div className="card" id="cardIniciante">
                <img src={stretch} className="card-img-top" alt="..." ></img>
                <div className="card-body">
                    <h5 className="card-title">PRANCHA</h5>
                    <p>20s</p>
                    <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen11}>
                        </Link> 
                </div>
                </div>

                <div className="card" id="cardIniciante">
                    <img src={impolite} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">ALONGAMENTO COBRA</h5>
                        <p>30s</p>
                        <Link className="stretched-link" to={"/costasombros"} onClick={handleOpen4}>
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
                <img src={armRaiseGif} className="card-img-top" alt="..." ></img>
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
                <img src={catGif} className="card-img-top" alt="..." ></img>
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
                <img src={childPose} className="card-img-top" alt="..." ></img>
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
                <img src={imagine} className="card-img-top" alt="..." ></img>
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
                <img src={impoliteGif} className="card-img-top" alt="..." ></img>
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
                <img src={pikeGif} className="card-img-top" alt="..." ></img>
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
                <img src={proneGif} className="card-img-top" alt="..." ></img>
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
                <img src={reclinegGif} className="card-img-top" alt="..." ></img>
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
                <img src={rhomboidGif} className="card-img-top" alt="..." ></img>
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
                <img src={sideArmGif} className="card-img-top" alt="..." ></img>
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
                <img src={stretchRight} className="card-img-top" alt="..." ></img>
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
                <img src={stretch} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                         Deite-se de costas, levante os ombros do tapete e levante ambas as pernas.
                         Aproxime um joelho e o cotovelo oposto um do outro, fazendo uma trituração 
                         para um lado, e estenda totalmente a outra perna.
                            <br></br>
                        Retorne à posição inicial e depois faça o crunch para o lado oposto.
                </Typography>
             </Box>
        </Modal>

    </>)

}

export default CostasOmbros;