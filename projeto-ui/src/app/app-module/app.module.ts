import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from '../app-component/app.component';
import { SegurancaModule } from '../seguranca/seguranca-module/seguranca.module';
import { AuthService } from '../seguranca/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CoreModule } from '../core/core-module/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from '../pages/cliente/cliente-module/cliente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    RouterModule,
    ClienteModule,
    SegurancaModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [AuthService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
