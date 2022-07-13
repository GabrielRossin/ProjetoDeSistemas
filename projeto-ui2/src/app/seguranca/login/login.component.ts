
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faGoogle,faFacebookSquare} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login-form',
  templateUrl:'./login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  
})
export class LoginFormComponent implements OnInit{

  msg: any;
  usuario !: string;
  imageSrc = 'assets/login.jpg';
  imageAlt = 'imagem do login';
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faFacebookSquare = faFacebookSquare;


  constructor(private auth: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string){
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/clientes']);
      })
      .catch(() => {
        this.msg = 'Usuário e/ou senha inválida';
      })
  }

  cadastrar()
  {
    this.router.navigate(['/cadastro']);
  }


}
