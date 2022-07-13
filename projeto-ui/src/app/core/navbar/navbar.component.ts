import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth/auth.service';
import { LogoutService } from 'src/app/seguranca/logout/logout.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor( public authService: AuthService, private errorHandler : ErrorHandlerService,
               private router: Router, private logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  logout(): void
  {
    this.logoutService.logout()
      .then(() => { this.router.navigate(['/login']); })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
