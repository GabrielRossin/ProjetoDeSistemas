import React from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
return(

  <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
       <Link to={"/"} className="navbar-brand"> </Link>

       <div className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link to={"/profile"} className="nav-link"> </Link>
             </li>
       </div>
          
       <div className="navbar-nav ml-auto">
            <li className="nav-item">
               <Link to={"/login"} className="nav-link"> Login </Link>
            </li>
            <li className="nav-item">
               <Link to={"/register"} className="nav-link"> Sign Up </Link>
            </li>

       </div>   
    </nav> 
 </div>
      
)


}
export default Navbar;