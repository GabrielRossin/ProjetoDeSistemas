import { ClienteService } from '../Pages/cliente/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LOCALE_ID } from '@angular/core';
import { DatePipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
//import { SetorService } from 'app/setor/setor.service';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthService,
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    ClienteService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Title,
    DatePipe
  ]
})
export class CoreModule { }
