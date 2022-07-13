import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { LogoutService } from './logout.service';
import { FinanceiroHttpInterceptor } from './financeiro-http-interceptor';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }),
    FontAwesomeModule
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinanceiroHttpInterceptor,
      multi: true
    },
    LogoutService
  ]
})
export class SegurancaModule { }
