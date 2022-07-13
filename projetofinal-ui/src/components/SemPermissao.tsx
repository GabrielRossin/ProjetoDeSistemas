import React from "react";
import Navbar from "./Navbar";

const PaginaNaoEncontrada: React.FC = () => {

  return(
    <><Navbar /><div className="container">
          <h1 className="text-center">Você não tem permissão para acessar a página</h1>
      </div></>
    )


}
export default PaginaNaoEncontrada;