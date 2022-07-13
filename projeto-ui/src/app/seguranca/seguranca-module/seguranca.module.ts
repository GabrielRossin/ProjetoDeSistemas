import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ButtonModule } from 'primeng/button';
import { environment } from './../../../environments/environment';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FinanceiroHttpInterceptor } from '../httpInterceptor/FinanceiroHttpInterceptor';
import { LogoutService } from '../logout/logout.service';
import { InputTextModule } from 'primeng/inputtext';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }),
    FontAwesomeModule

  ],
  exports:[LoginComponent],
  providers:[
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinanceiroHttpInterceptor,
      multi: true
    },
    LogoutService]
})
export class SegurancaModule { }
