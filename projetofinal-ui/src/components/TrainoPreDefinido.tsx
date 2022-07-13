import imageAbdominal from '../assets/treino/lescinqgym_001asw-900x600.jpg'
import peito from '../assets/peito/desafio-100-flexoes-em-6-semanas-consegue-encarar-10042018160125951.jpeg'
import braco from '../assets/treino/exercicios-para-bracos.jpg'
import perna from '../assets/treino/pernas-de-treinamento-na-academia_175682-3740.webp'
import costas from '../assets/treino/barra-fixa-5.jpg'
import { Link } from "react-router-dom";
import '../styles/trainingPreDefinido/trainingPreDefinido.css'

const TrainoPreDefinido: React.FC = () =>
{
    return(<>
     
            <div className="card" id="treinopredefinido">
                <img src={imageAbdominal} className="card-img-top" alt="..." > 
                </img>
                <div className="card-body">
                    <h5 className="card-title">ABDOMINAL</h5>
                    <Link className="stretched-link" to={"/abdominal"}/>
                </div>
            </div>
    

     
            <div className="card" id="treinopredefinido">
                <img src={peito} className="card-img-top" alt="..." > 
                </img>
                <div className="card-body">
                    <h5 className="card-title">PEITO</h5>
                    <Link className="stretched-link" to={"/peito"}/>
                </div>
            </div>
 
            <div className="card" id="treinopredefinido">
                <img src={braco} className="card-img-top" alt="..." > 
                </img>
                <div className="card-body">
                    <h5 className="card-title">BRAÇO</h5>
                    <Link className="stretched-link" to={"/braco"}/>
                </div>
            </div>

            <div className="card" id="treinopredefinido">
                <img src={perna} className="card-img-top" alt="..." > 
                </img>
                <div className="card-body">
                    <h5 className="card-title">PERNAS</h5>
                    <Link className="stretched-link" to={"/perna"}/>
                </div>
            </div>

            <div className="card" id="treinopredefinido">
                <img src={costas} className="card-img-top" alt="..." > 
                </img>
                <div className="card-body">
                    <h5 className="card-title">COSTAS E OMBROS</h5>
                    <Link className="stretched-link" to={"/costasombros"}/>
                </div>
            </div>
 
  



    </>)
}

export default TrainoPreDefinido;