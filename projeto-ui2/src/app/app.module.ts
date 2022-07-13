import { SegurancaModule } from './seguranca/seguranca.module';

import { AuthService } from './seguranca/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModuleModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { ClienteModule } from './Pages/cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MessageService } from 'primeng/api';
import { PaginaInicialModule } from './Pages/pagina-inicial/pagina-inicial.module';
import { ToastModule } from 'primeng/toast';
import { CoreModule } from './Core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[

    BrowserModule,
    HttpClientModule,
    ConfirmDialogModule,
    RouterModuleModule,
    ToastModule,
    PaginaInicialModule,
    ClienteModule,
    SegurancaModule,
    CoreModule,
    BrowserAnimationsModule,
  ],

  providers: [AuthService , MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
