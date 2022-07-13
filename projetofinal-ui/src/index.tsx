import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
     <GoogleOAuthProvider 
          clientId = '333956410918-sgp5k0n3ui893q1je32bl8llc6v0pssd.apps.googleusercontent.com'
          // onScriptLoadSuccess={() =>{
          //                <script src="https://accounts.google.com/gsi/client" async defer></script>
          //           }}
     >
      <BrowserRouter>
           <App />
      </BrowserRouter>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

reportWebVitals();
