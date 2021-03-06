import flexaoInclinadaGif from '../assets/peito/iniciante/PeitoInclinado.gif'
import flexaoInclinada from '../assets/peito/iniciante/PeitoIncliando.jpg'
import flexaoGif from '../assets/peito/iniciante/push-up-exercise-illustration.gif'
import flexao from '../assets/peito/iniciante/flexao.jpg'
import flexaoJoelhoGif from '../assets/peito/iniciante/f620c92cf9f2631338f51f711669d320.gif'
import flexaoJoelho from '../assets/peito/iniciante/flexaoJoelho.jpg'
import flexaoBracoAbertoGif from '../assets/peito/iniciante/classic-push-ups.gif'
import flexaoBracoAberto from '../assets/peito/iniciante/flexaoBracoAberto.jpg'
import flexaoHinduGif from '../assets/peito/iniciante/Hindu-push-ups.gif'
import flexaoHindu from '../assets/peito/iniciante/hinduPush.jpg'
import cobra from '../assets/abdminal/iniciante/abdominal-stretch.gif'
import caixa from '../assets/peito/iniciante/f620c92cf9f2631338f51f711669d320.gif'
import alongamento from '../assets/peito/iniciante/alongamentoPeito.jpg'
import flexaCaixaGif from '../assets/peito/iniciante/staggered-arm-push-up-exercise-illustration-spotebi.gif'
import flexaCaixa from '../assets/peito/iniciante/flexaoCaixa.jpg'

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Modal, Tab, Typography } from "@mui/material";
import React from "react";
import {getCurrentUser} from "../services/auth.service";
import SemPermissao from "./SemPermissao";
import { Link } from 'react-router-dom';

const Peito: React.FC = () => {

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
                    <Tab label="Intermedi??rio" value="2" />
                    <Tab label="Avan??ado"      value="3" />
                </TabList>
            </Box>
            <TabPanel value='1'>

                <div className="card-deck">

                        <div className="card" id="cardIniciante">
                            <img src={flexaoInclinada} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O INCLINADA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen}>
                                    </Link> 
                            </div>
                        </div>
                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>
                        <div className="card" id="cardIniciante">
                            <img src={flexao} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>
                        <div className="card" id="cardIniciante">
                            <img src={flexaoBracoAberto} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS BRA??OS ABERTOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>
                        <div className="card" id="cardIniciante">
                            <img src={flexaoInclinada} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O INCLINADA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen}>
                                    </Link> 
                            </div>
                        </div>

                </div>

                <div className="card-deck">

                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoBracoAberto} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS BRA??OS ABERTOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoHindu} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O HINDU</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={cobra} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO COBRA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen6}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={alongamento} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO DE PEITO</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen4}>
                                    </Link> 
                            </div>
                        </div>

                </div>
            </TabPanel>
            <TabPanel value='2'>
                <div className="card-deck">
                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexao} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoBracoAberto} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS BRA??OS ABERTOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoHindu} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O HINDU</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaCaixa} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O EM CAIXA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen7}>
                                    </Link> 
                            </div>
                        </div>

                </div>
                <div className="card-deck"> 

                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoBracoAberto} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS BRA??OS ABERTOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoHindu} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O HINDU</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={cobra} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO COBRA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen6}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={alongamento} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO DE PEITO</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen4}>
                                    </Link> 
                            </div>
                        </div>
                </div>
            </TabPanel>

            <TabPanel value='3'>
            <div className="card-deck">
                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexao} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen2}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>
                        <div className="card" id="cardIniciante">
                            <img src={flexaoHindu} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O HINDU</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaCaixa} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O EM CAIXA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen7}>
                                    </Link> 
                            </div>
                        </div>

                </div>
                <div className="card-deck"> 

                        <div className="card" id="cardIniciante">
                            <img src={flexaoJoelho} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS JOELHOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen1}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoBracoAberto} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O COM OS BRA??OS ABERTOS</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen3}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={flexaoHindu} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">FLEX??O HINDU</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen5}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={cobra} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO COBRA</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen6}>
                                    </Link> 
                            </div>
                        </div>

                        <div className="card" id="cardIniciante">
                            <img src={alongamento} className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">ALONGAMENTO DE PEITO</h5>
                                <p>16X</p>
                                <Link className="stretched-link" to={"/peito"} onClick={handleOpen7}>
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
                        FLEX??O INCLINADA
                </Typography>
                <img src={flexaoInclinadaGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                        Deite de bru??os em frente a um m??vel e coloque as m??os em cima dele. 
                        As palmas devem estar contra o m??vel em uma dist??ncia ligeiramente maior que a 
                        largura dos ombros e os cotovelos devem estar estendidos.
                            <br></br>
                            Os dedos dos p??s devem estar apoiados no ch??o, com os p??s separados em uma
                            dist??ncia aproximadamente correspondente ?? largura dos quadris.
                            <br></br>
                            Lentamente e continuamente, abaixe o corpo, dobrando o cotovelo e 
                            deixando o peito um pouco acima do m??vel. 
                            Estender os bra??os e retornar ?? posi????o inicial.
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
                        FLEX??O COM OS JOELHOS
                </Typography>
                <img src={flexaoJoelhoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                    Coloque os joelhos no ch??o, as m??os abaixo dos ombros e cruze os p??s.
                    Mantendo as costas retas, comece a dobrar os cotovelos at?? o peito quase tocar o
                    ch??o.
                    Fa??a uma pausa e empurre de volta ?? posi????o inicial.
                    Repita at?? que o conjunto esteja completo.
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
                        FLEX??O
                </Typography>
                <img src={flexaoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                Com as pernas estendidas para tr??s, coloque as m??os abaixo dos ombros, 
                ligeiramente mais afastadas do que a largura dos ombros.
                 Comece a dobrar os cotovelos e abaixe o peito at?? ficar um pouco acima do ch??o.
                 <br></br>
                 Empurre de volta para a posi????o inicial. Um impulso de 1 segundo, 
                 pausa de 1 segundo e contagem regressiva de 2 segundos ?? o ideal.
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
                        FLEX??O COM OS BRA??OS ABERTOS
                </Typography>
                <img src={flexaoBracoAbertoGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Comece uma flex??o normal, mas com a dist??ncia entre as m??o maior do que
                            a dos ombros
                            <br></br>
                            Em seguida, empurre o corpo para cima e para baixo
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
                        ALONGAMENTO DO PEITO
                </Typography>
                <img src={alongamento} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                           Encontre uma estrutura de porta, deixe uma das pernas um pouco a frente,
                           com o joelho flexionado, lentamente mova o peito para frente.
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
                        FLEX??O HINDU
                </Typography>
                <img src={flexaoHinduGif} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                1. Comece em uma postura de cachorro para baixo , com as m??os na largura dos ombros, 
                   o corpo em forma de V e os p??s na largura do quadril.
                2. Dobre os cotovelos e abaixe o peito at?? que esteja um pouco acima do ch??o, entrando na postura da prancha baixa .
                3. Estique os bra??os, levante o tronco e fa??a a postura do c??o para cima .
                4. Abaixe o tronco, levante os quadris e volte para a postura do c??o para baixo .
                5. Repita at?? que o conjunto esteja completo.
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
                             Deite de bru??os e dobre seus cotovelos com as m??os debaixo dos ombros
                             Empurre o peito afastando o m??ximo poss??vel do ch??o.
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
                        FLEX??O NA CAIXA
                </Typography>
                <img src={caixa} className="card-img-top" alt="..." ></img>
                <Typography variant="body2" color="text.secondary">
                            Coloque-se sobre os quatro membros, se apoiando com o joelho e as m??os
                            diretamente abaixo dos ombros. Dobre os cotovelos e fa??a uma flex??o
                </Typography>
             </Box>
        </Modal>


    </>
    );
}

export default Peito;