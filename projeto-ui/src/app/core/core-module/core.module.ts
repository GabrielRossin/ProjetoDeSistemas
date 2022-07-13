import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NaoAutorizadoComponent } from '../nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AuthService } from 'src/app/seguranca/auth/auth.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ClienteService } from 'src/app/pages/cliente/cliente-service/cliente.service';

@NgModule({
  declarations: [NaoAutorizadoComponent, PaginaNaoEncontradaComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports:[NavbarComponent],
  providers:[
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
