import React from "react";

import agachamentoRevesadaGif from '../assets/perna/agachamentoRevesada.gif'
import agachamentoRevesada from '../assets/perna/agachamentoRevesada.jpg'
import agachamentoSaltoGif from '../assets/perna/agachamentoSalto.gif'
import agachamentoSalto from '../assets/perna/agachamentoSalto.jpg'
import empurrar from '../assets/perna/calf-stretch-exercise-illustration.gif'
import chuteGif from '../assets/perna/chute.gif'
import chute from '../assets/perna/chute.jpg'
import chuteHorizontaisGif from '../assets/perna/chutes horizontais.gif'
import chuteHorizontais from '../assets/perna/chutes horizontais.jpg'
import circlesGif from '../assets/perna/circles-in-the-sky-exercise-illustration-spotebi.gif'
import circles from '../assets/perna/circles.jpg'
import estocadaGif from '../assets/perna/estocada.gif'
import estocada from '../assets/perna/estocada.jpg'
import firyGif from '../assets/perna/fire-hydrant-exercise-illustration.gif'
import firy from '../assets/perna/fire.jpg'
import lungesGif from '../assets/perna/lunges.gif'
import lunges from '../assets/perna/lunges.jpg'
import lyingGif from '../assets/perna/lying-side-hip-abduction-exercise-illustration-spotebi.gif'
import lying from '../assets/perna/lying.jpg'
import narrowGif from '../assets/perna/Narrow-Squats.gif'
import narrow from '../assets/perna/narrow.jpg'
import paredeGif from '../assets/perna/parede.gif'
import parede from '../assets/perna/parede.jpg'
import quadriceps from '../assets/perna/quadriceps.jpg'
import sideHopeGif from '../assets/perna/sideHope.gif'
import sideHope from '../assets/perna/sideHope.jpg'
import singleLegGif from '../assets/perna/single-leg-standing-calf-raise.gif'
import singleLeg from '../assets/perna/singleLeg.jpg'
import streachtGif from '../assets/perna/single-leg-stretch-exercise-illustration-spotebi.gif'
import streacht from '../assets/perna/stretch.jpg'
import sumoGif from '../assets/perna/sumo.gif'
import sumo from '../assets/perna/sumo.jpg'
import SemPermissao from "./SemPermissao";
import { getCurrentUser } from "../services/auth.service";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Modal, Tab, Typography } from "@mui/material";
import { Link } from "react-router-dom";





const Perna: React.FC = () => {

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
    const [open14, setOpen14] = React.useState(false);
    const [open15, setOpen15] = React.useState(false);
    const [open16, setOpen16] = React.useState(false);

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

    const handleOpen14 = () => setOpen14(true);
    const handleClose14 = () => setOpen14(false)

    const handleOpen15 = () => setOpen15(true);
    const handleClose15 = () => setOpen15(false)

    const handleOpen16 = () => setOpen16(true);
    const handleClose16 = () => setOpen16(false)

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
                                    <img src={agachamentoRevesada} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Agachamento Revesado</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={agachamentoSalto} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Agachamento Salto</h5>
                                        <p>20X</p>
                                        <Link to={'/perna'} className="stretched-link" onClick={handleOpen1}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={empurrar} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">EMPURRAR</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/perna"} 
                                                    onClick={handleOpen2}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={chute} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">CHUTE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen3}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={chuteHorizontais} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">CHUTE HORIZONTAIS</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen4}>
                                            </Link> 
                                    </div>
                                </div>
                                
                            </div>
                        
                            <div className='card-deck'>

                                <div className="card" id="cardIniciante">
                                    <img src={circles} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">CIRCULOS COM OS BRAÇOS</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen5}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={estocada} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">ESTOCADA</h5>
                                        <p>20X</p>
                                        <Link to={'/perna'} className="stretched-link" onClick={handleOpen6}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={firy} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">FIRY</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/perna"} 
                                                    onClick={handleOpen7}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={lunges} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">LUNGES</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen8}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={lying} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">LYING</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen9}>
                                            </Link> 
                                    </div>
                                </div>
                                
                            </div>
                    </TabPanel>

                    <TabPanel value='2'>
                            <div className='card-deck'>

                                <div className="card" id="cardIniciante">
                                    <img src={narrow} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">NARROW</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen10}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={parede} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">PAREDE</h5>
                                        <p>20X</p>
                                        <Link to={'/perna'} className="stretched-link" onClick={handleOpen11}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={quadriceps} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">QUADRICEPS</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/perna"} 
                                                    onClick={handleOpen12}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={sideHope} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SIDE HOPE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen13}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={singleLeg} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SINGLE LEG</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen14}>
                                            </Link> 
                                    </div>
                                </div>

                            </div>

                            <div className='card-deck'>

                                    <div className="card" id="cardIniciante">
                                        <img src={streacht} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">LEVANTAMENTO LATERAL</h5>
                                            <p>16X</p>
                                            <Link className="stretched-link" to={"/perna"} onClick={handleOpen15}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={sumo} className='card-img-top' alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">SUMO</h5>
                                            <p>20X</p>
                                            <Link to={'/perna'} className="stretched-link" onClick={handleOpen16}>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                    <img src={sideHope} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SIDE HOPE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen13}>
                                            </Link> 
                                    </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                    <img src={singleLeg} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SINGLE LEG</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen14}>
                                            </Link> 
                                    </div>
                                    </div> 
                            </div>
                    </TabPanel>

                    <TabPanel value='3'>

                            <div className='card-deck'>
                                <div className="card" id="cardIniciante">
                                    <img src={agachamentoRevesada} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Agachamento Revesado</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={agachamentoSalto} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Agachamento Salto</h5>
                                        <p>20X</p>
                                        <Link to={'/perna'} className="stretched-link" onClick={handleOpen1}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={empurrar} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">EMPURRAR</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/perna"} 
                                                    onClick={handleOpen2}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={chute} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">CHUTE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen3}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={chuteHorizontais} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">CHUTE HORIZONTAIS</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen4}>
                                            </Link> 
                                    </div>
                                </div>

                            </div>

                            <div className='card-deck'>

                                    <div className="card" id="cardIniciante">
                                        <img src={streacht} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">LEVANTAMENTO LATERAL</h5>
                                            <p>16X</p>
                                            <Link className="stretched-link" to={"/perna"} onClick={handleOpen15}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={sumo} className='card-img-top' alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">SUMO</h5>
                                            <p>20X</p>
                                            <Link to={'/perna'} className="stretched-link" onClick={handleOpen16}>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                    <img src={sideHope} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SIDE HOPE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen13}>
                                            </Link> 
                                    </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                    <img src={singleLeg} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SINGLE LEG</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/perna"} onClick={handleOpen14}>
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
                    SOCO
                </Typography>
                <img src={agachamentoRevesadaGif} className="card-img-top" alt="..." ></img>
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
                    TRICEPES CADEIRA
                </Typography>
                <img src={agachamentoSaltoGif} className="card-img-top" alt="..." ></img>
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
                    CIRCULOS COM O BRAÇO
                </Typography>
                <img src={empurrar} className="card-img-top" alt="..." ></img>
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
                    FLEXÃO EM LOSANGULO
                </Typography>
                <img src={chuteGif} className="card-img-top" alt="..." ></img>
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
                    PRANCHA EM DIAGONAL
                </Typography>
                <img src={chuteHorizontaisGif} className="card-img-top" alt="..." ></img>
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
                    MEDE PALMOS
                </Typography>
                <img src={circlesGif} className="card-img-top" alt="..." ></img>
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
                    FLEXÃO PAREDE
                </Typography>
                <img src={estocadaGif} className="card-img-top" alt="..." ></img>
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
                    ABDOMINAL CURVADO
                </Typography>
                <img src={firyGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite-se de bruços e dobr seus cotovelos com as mão debaixo dos ombros
                            <br></br>
                            Empurre o peito afastando-o o máximo possível do chão. Fique nessa possição 
                            por alguns segundos
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
                    ABS SUPERMAN
                </Typography>
                <img src={lungesGif} className="card-img-top" alt="..." ></img>
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
            open={open9}
            onClose={handleClose9}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    TESOURA
                </Typography>
                <img src={lyingGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Deite sobre o lado direito. Coloque o cotovelo direito alinhado abaixo do ombro
                             e coloque a mão esquerda na cintura. Coloque a perna esquerda sobre a perna direita
                            <br></br>
                            Erga o quadril, mantenha a posição durante 2-4 segundos e volte a posição inical
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
                    BURPEE
                </Typography>
                <img src={narrowGif} className="card-img-top" alt="..." ></img>
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
            open={open11}
            onClose={handleClose11}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    FLEXÃO SENTADA
                </Typography>
                <img src={paredeGif} className="card-img-top" alt="..." ></img>
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
            open={open12}
            onClose={handleClose12}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    LEVANTAMENTO LATERAL
                </Typography>
                <img src={quadriceps} className="card-img-top" alt="..." ></img>
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
            open={open13}
            onClose={handleClose13}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ALONGAMENTO TRICEPS
                </Typography>
                <img src={sideHopeGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open14}
            onClose={handleClose14}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ALONGAMENTO TRICEPS
                </Typography>
                <img src={singleLegGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open15}
            onClose={handleClose15}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ALONGAMENTO TRICEPS
                </Typography>
                <img src={streachtGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

        <Modal
            open={open16}
            onClose={handleClose16}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h1">
                    ALONGAMENTO TRICEPS
                </Typography>
                <img src={sumoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>


 </> )



}

export default Perna