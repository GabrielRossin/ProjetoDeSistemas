import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Profile from "../components/Profile";
import BoardUser from "../components/BoardUser";
import BoardModerator from "../components/BoardModerator";
import BoardAdmin from "../components/BoardAdmin";
import PaginaNaoEncontrada from "../components/PaginaNaoEncontrada";
import Feedback from "../components/Feedback";
import Settings from "../components/Settings";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import CreateFormProfile from "../components/CreateFormProfile";
import Training from '../components/Training';
import TrainoPreDefinido from "../components/TrainoPreDefinido";
import Abdominal from "../components/Abdominal";
import Peito from '../components/peito'
import Braco from '../components/braco'
import Perna from '../components/perna'
import CostasOmbros from "../components/CostasOmbros";

const Routes = () => {
   return(
       <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/trainingPreDefinido" component={TrainoPreDefinido}/>
          <Route exact path={"/abdominal"} component={Abdominal}/>
          <Route exact path={'/braco'} component={Braco}/>
          <Route exact path={'/peito'} component={Peito}/>
          <Route exact path={'/perna'} component={Perna}/>
          <Route exact path={'/costasOmbros'} component={CostasOmbros}/>
          <Route exact path="/user" component={BoardUser} />
          <Route exact path="/mod" component={BoardModerator} />
          <Route exact path="/admin" component={BoardAdmin} />
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/forgotPassword" component={ForgotPassword}/>
          <Route exact path="/resetPassword" component={ResetPassword}/>
          <Route exact path="/formProfile" component={CreateFormProfile}/>
          <Route path= "**" component={PaginaNaoEncontrada}/>
       </Switch>
   )
}

export default Routes;