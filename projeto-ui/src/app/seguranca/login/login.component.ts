import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {faFacebook,faGoogle,faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: any;
  imageSrc = '../../../assets/login/login.jpg';
  imageAlt = 'imagem do login';
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faFacebookSquare = faFacebookSquare;


  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {}

  login(usuario: string, senha: string)
  {
    this.auth.login(usuario, senha)
             .then(() => {this.router.navigate(['/clientes'])})
             .catch(() => {this.msg = 'Usuário e/ou senha inválida';})
  }

  cadastrar()
  {this.router.navigate(['/cadastro']);}

}
