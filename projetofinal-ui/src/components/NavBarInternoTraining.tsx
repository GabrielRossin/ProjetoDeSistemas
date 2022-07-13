import React from "react";
import {Link} from "react-router-dom";
import "../styles/NavBarInterno/navBarInterno.css"
import $ from 'jquery';
import { logout } from "../services/auth.service";
const NavbarInternoTraining: React.FC = () => {

    
    function test(){
        var tabsNewAnim = $('#navbarSupportedContent');
       // var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
         $(".hori-selector").css({
           "top":itemPosNewAnimTop.top + "px", 
           "left":itemPosNewAnimLeft.left + "px",
           "height": activeWidthNewAnimHeight + "px",
           "width": activeWidthNewAnimWidth + "px"
         });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
      $(document).ready(function(){
         setTimeout(function(){ test(); });
       });
      $(window).on('resize', function(){
        setTimeout(function(){ test(); }, 500);
      });
      $(".navbar-toggler").on("click",function(){
        setTimeout(function(){ test(); });
      });
    
    
      const logOut = () => {
        logout();
      };
    
return(

    <nav className="navbar navbar-expand-custom navbar-mainbg">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <div className="hori-selector"><div className="left"></div><div className="right"></div></div>

            <li className="nav-item active">
                <Link to={"/training"}  className="nav-link">
                      <i className="far fa-address-book"></i> TREINOS
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/feedback"}  className="nav-link">
                      <i className="far fa-clone"></i> FEEDBACK
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/profile"}  className="nav-link">
                      <i className="far fa-calendar-alt"></i> PERFIL
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/settings"}  className="nav-link"><i className="far fa-chart-bar"></i>CONFIGURAÇÕES</Link>
            </li>
            <li className="nav-item">
                <Link to={"/login"} onClick={logOut}  className="nav-link">
                      <i className="far fa-calendar-alt"></i> LOGOUT
                </Link>
            </li>
        </ul>
    </div>
</nav>

)

}
export default NavbarInternoTraining;