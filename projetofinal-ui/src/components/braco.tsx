import abdominalCurvadoGif from '../assets/braço/17691301-Bodyweight-Side-Lying-Biceps-Curl_Upper-Arms_360.gif'
import abdominalCurvado  from '../assets/braço/abdominal curvado.jpg'
import abssupermanGif from '../assets/braço/abs-superman.gif'
import abssuperman from '../assets/braço/abs-superman.jpg'
import tesouraGif from '../assets/braço/arm-swings-exercise-illustration-spotebi.gif'
import tesoura from '../assets/braço/tesoura.jpg'
import burpeeGif from '../assets/braço/burpees-exercise-illustration.gif'
import burpee from '../assets/braço/burpee.jpg'
import flexaoSentadaGif from '../assets/braço/butterfly-dips-exercise-illustration-spotebi.gif'
import flexaoSentada from '../assets/braço/frame_1_delay-0.5s.jpg'
import diamondGif from '../assets/braço/diamond-pushup.gif'
import diamond from '../assets/braço/diamonFlexao.jpg'
import palmosGif from '../assets/braço/c8b33ba060b1edbd7ca826e1faf6ba0f.gif'
import palmos from '../assets/braço/mede palmos.jpg'
import flexaoParedeGif from '../assets/braço/Narrow-Grip-Wall-Push-Up.gif'
import flexaoParede from '../assets/braço/flexão parede.jpg'
import levantamentoLateral from '../assets/braço/levantamento lateral.jpg'
import levantamentoLateralGif from '../assets/braço/levantamento lateral.gif'
import socoGif from '../assets/braço/half-squat-jab-cross-exercise-illustration.gif'
import soco from '../assets/braço/soco.jpg'
import TricepesCadeiraGif from '../assets/braço/tricep-dips-exercise-illustration-spotebi (1).gif'
import TricepesCadeira from '../assets/braço/TricipesCadeira.jpg'
import alongamentoTriceps from '../assets/braço/triceps-stretch-exercise-illustration.gif'
import circulosBraco from '../assets/braço/arm circles.jpg'
import circulosBracoGif from '../assets/braço/arm-circles-exercise-illustration.gif'
import diagonalPlankeGif from '../assets/braço/diagonal plank.gif'
import diagonalPlanke from '../assets/braço/diagonalPlanke.jpg'

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Modal, Tab, Typography } from "@mui/material";
import React from "react";
import { getCurrentUser } from "../services/auth.service";
import SemPermissao from "./SemPermissao";
import { Link } from 'react-router-dom'


const Braco: React.FC = () => {

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
                                    <img src={soco} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">SOCOS</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={TricepesCadeira} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Tricepes Cadeira</h5>
                                        <p>20X</p>
                                        <Link to={'/braco'} className="stretched-link" onClick={handleOpen1}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={circulosBraco} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">CIRCULOS COM O BRAÇO</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/braco"} 
                                                    onClick={handleOpen2}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diamond} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO EM LOSANGO</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen3}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diagonalPlanke} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">PRANCHA DIAGONAL</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen4}>
                                            </Link> 
                                    </div>
                                </div>
                                
                            </div>
                        
                            <div className='card-deck'>
                                <div className="card" id="cardIniciante">
                                    <img src={palmos} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">MEDE PALMOS</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen5}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={flexaoParede} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO NA PAREDE</h5>
                                        <p>20X</p>
                                        <Link to={'/braco'} className="stretched-link" onClick={handleOpen6}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={circulosBraco} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">CIRCULOS COM O BRAÇO</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/braco"} 
                                                    onClick={handleOpen2}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diamond} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO EM LOSANGO</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen3}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diagonalPlanke} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">PRANCHA DIAGONAL</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen4}>
                                            </Link> 
                                    </div>
                                </div>
                                
                            </div>
                    </TabPanel>

                    <TabPanel value='2'>
                            <div className='card-deck'>

                                <div className="card" id="cardIniciante">
                                    <img src={abdominalCurvado} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">ABDOMINAL CURVADO</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen7}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={abssuperman} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">ABS SUPERMAN</h5>
                                        <p>20X</p>
                                        <Link to={'/braco'} className="stretched-link" onClick={handleOpen8}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={tesoura} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">TESOURA</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/braco"} 
                                                    onClick={handleOpen9}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={burpee} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">BURPEE</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen10}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={flexaoSentada} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO SENTADA</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen11}>
                                            </Link> 
                                    </div>
                                </div>

                            </div>

                            <div className='card-deck'>

                                    <div className="card" id="cardIniciante">
                                        <img src={levantamentoLateral} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">LEVANTAMENTO LATERAL</h5>
                                            <p>16X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen12}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={abssuperman} className='card-img-top' alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">ABS SUPERMAN</h5>
                                            <p>20X</p>
                                            <Link to={'/braco'} className="stretched-link" onClick={handleOpen8}>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='card' id='cardIniciante'>
                                            <img src={tesoura} className='card-img-top' alt='...'></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">TESOURA</h5>
                                                    <p>16X</p>
                                                    <Link className="stretched-link" to={"/braco"} 
                                                        onClick={handleOpen9}>
                                                    </Link> 
                                            </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={burpee} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">BURPEE</h5>
                                            <p>20X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen10}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={alongamentoTriceps} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">ALONGAMENTO TRICEPS</h5>
                                            <p>20X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen13}>
                                                </Link> 
                                        </div>
                                    </div>

                            </div>
                    </TabPanel>

                    <TabPanel value='3'>

                            <div className='card-deck'>

                                <div className="card" id="cardIniciante">
                                    <img src={palmos} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">MEDE PALMOS</h5>
                                        <p>16X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen5}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={flexaoParede} className='card-img-top' alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO NA PAREDE</h5>
                                        <p>20X</p>
                                        <Link to={'/braco'} className="stretched-link" onClick={handleOpen6}>
                                        </Link>
                                    </div>
                                </div>

                                <div className='card' id='cardIniciante'>
                                        <img src={circulosBraco} className='card-img-top' alt='...'></img>
                                            <div className="card-body">
                                                <h5 className="card-title">CIRCULOS COM O BRAÇO</h5>
                                                <p>16X</p>
                                                <Link className="stretched-link" to={"/braco"} 
                                                    onClick={handleOpen2}>
                                                </Link> 
                                        </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diamond} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">FLEXÃO EM LOSANGO</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen3}>
                                            </Link> 
                                    </div>
                                </div>

                                <div className="card" id="cardIniciante">
                                    <img src={diagonalPlanke} className="card-img-top" alt="..." ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">PRANCHA DIAGONAL</h5>
                                        <p>20X</p>
                                        <Link className="stretched-link" to={"/braco"} onClick={handleOpen4}>
                                            </Link> 
                                    </div>
                                </div>
                                
                            </div>

                            <div className='card-deck'>

                                    <div className="card" id="cardIniciante">
                                        <img src={levantamentoLateral} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">LEVANTAMENTO LATERAL</h5>
                                            <p>16X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen12}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={abssuperman} className='card-img-top' alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">ABS SUPERMAN</h5>
                                            <p>20X</p>
                                            <Link to={'/braco'} className="stretched-link" onClick={handleOpen8}>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='card' id='cardIniciante'>
                                            <img src={tesoura} className='card-img-top' alt='...'></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">TESOURA</h5>
                                                    <p>16X</p>
                                                    <Link className="stretched-link" to={"/braco"} 
                                                        onClick={handleOpen9}>
                                                    </Link> 
                                            </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={burpee} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">BURPEE</h5>
                                            <p>20X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen10}>
                                                </Link> 
                                        </div>
                                    </div>

                                    <div className="card" id="cardIniciante">
                                        <img src={alongamentoTriceps} className="card-img-top" alt="..." ></img>
                                        <div className="card-body">
                                            <h5 className="card-title">FLEXÃO SENTADA</h5>
                                            <p>20X</p>
                                            <Link className="stretched-link" to={"/braco"} onClick={handleOpen13}>
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
                <img src={socoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Comece em uma posição atlética, com os pés afastados na largura dos ombros, os joelhos
                 levemente flexionados e os quadris baixos e para trás.
                 Levante os braços, de modo que as palmas das mãos fiquem voltadas para os lados do rosto.
                Empurre o braço esquerdo para fora em um movimento de soco e depois retorne à posição inicial.
                 Empurre o braço direito para fora e continue trocando de lado rapidamente.
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
                <img src={TricepesCadeiraGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">

                1. Coloque as mãos atrás de você em uma cadeira, de modo que os dedos fiquem voltados para a frente.
                2. Estenda as pernas e comece a dobrar os cotovelos.
                3. Abaixe o corpo até que os braços formem um ângulo de 90 graus.
                4. Levante o corpo de volta até que os braços fiquem retos.
                5. Repita.
                            
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
                <img src={circulosBracoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                           Fique de pé com os braços estendidos para os lados na altura dos ombros.
                           <br></br>
                           Movimente seus braços em circulos rapidamente no sentido horário e depois no
                           anti-horarios
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
                <img src={diamondGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                          Comece com a posição de flexão. Faça uma forma de diamante por baixo com
                          os polegares e indicadorres juntos e empurre o corpo para cima e para baixo
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
                <img src={diagonalPlankeGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Comece com uma prancha de braço reta. Levante o braço direito e perna esquerda,
                             parelelos ao chão.
                             <br></br>
                             Regresse a posição inicial e repita com o lado oposto
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
                <img src={palmosGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Fique em pé com os pés afastados na largura dos ombros.
                Incline-se e toque o chão com as palmas das mãos.
                Estique as mãos o máximo que puder, mantendo as pernas retas e faça uma pausa.
                Volte para a posição inicial e repita até que a série esteja completa.
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
                <img src={flexaoParedeGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                             Coloque-se em frente de uma parede à distancia de um passo longo.
                             Em seguida, coloque as mãos na direção da parade, apoiando o corpo.
                             Levante os calcanhares
                             <br />
                             Dobre lentamente os ombros e pressione a parte superior do corpo na direção da parede
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
                <img src={abdominalCurvadoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                           Deite-se com o lado esquerdo do 
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
                <img src={abssupermanGif} className="card-img-top" alt="..." ></img>
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
                <img src={tesouraGif} className="card-img-top" alt="..." ></img>
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
                <img src={burpeeGif} className="card-img-top" alt="..." ></img>
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
                <img src={flexaoSentadaGif} className="card-img-top" alt="..." ></img>
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
                <img src={levantamentoLateralGif} className="card-img-top" alt="..." ></img>
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
                <img src={alongamentoTriceps} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Deite-se com as pernas totalmente estendidas e os braços estendidos sobre a cabeça.
                Levante as duas pernas e o tronco simultaneamente e alcance os pés.
                            <br></br>
                Retorne à posição inicial 
                </Typography>
             </Box>
        </Modal>

       
    </>)

}

export default Braco;