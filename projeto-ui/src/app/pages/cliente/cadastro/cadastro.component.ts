import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente-service/cliente.service';
import { Cliente, Setor, Grupo } from '../../../core/core-model/model';
import { ErrorHandlerService } from 'src/app/core/error-handler/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/seguranca/auth/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  msg: any;

  constructor(private authService: AuthService ,  private router: Router) { }

  ngOnInit(): void {
  }

  register(usuario: string, email:string, senha: string)
  {
      this.authService.register(usuario,email,senha)
      .then(() => {
                    this.isSuccessful = true;
                    this.isSignUpFailed = false;
                    this.router.navigate(['/login'])
                  })
      .catch((err) => {
                        this.errorMessage = err.error.message;
                        this.isSignUpFailed = true;
                   })

  }


}


