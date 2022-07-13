import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-ui';

  constructor(private router: Router){}

  exibindoNavbar(): boolean {
    if(this.router.url === '/login' || this.router.url === '/cadastro')
    { return false; }
    return true;
  }

}
