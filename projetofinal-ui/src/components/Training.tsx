import NavbarInternoTraining from "./NavBarInternoTraining";
import '../styles/Training/Training.css'
import imageTraining from '../assets/treino/alimentação-pós-treino-capa.jpg'
import { Link } from "react-router-dom";
const Profile: React.FC = () => {
   
    return(
    <>
    <div className="card" id="predefinido">
         <img src={imageTraining} className="card-img-top" alt="..." > 
           
         </img>
         <div className="card-body">
            <h5 className="card-title">TREINO PRÉ DEFINIDO</h5>
            <Link className="stretched-link" to={"/trainingPreDefinido"}/>
        </div>
    </div>

    {/* <div className="card" id="personalizado">
         <img src={imageTraining} className="card-img-top" alt="..." > 
           
         </img>
         <div className="card-body">
            <h5 className="card-title">TREINO PERSONALIZADO </h5>
            <Link className="stretched-link" to={"#"}/>
        </div>
    </div>

    
    <div className="card" id="diario">
         <img src={imageTraining} className="card-img-top" alt="..." > 
           
         </img>
         <div className="card-body" >
            <h5 className="card-title">TREINO DIARIO </h5>
            <Link className="stretched-link" to={"#"}/>
        </div>
    </div> */}

    <div className="card" id="taf">
         <img src={imageTraining} className="card-img-top" alt="..." > 
           
         </img>
         <div className="card-body" >
            <h5 className="card-title">TREINO PARA TAF </h5>
            <Link className="stretched-link" to={"#"}/>
        </div>
    </div>

    </>)
}

export default Profile;