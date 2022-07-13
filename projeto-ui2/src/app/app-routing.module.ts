import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PaginaInicialComponent } from './Pages/pagina-inicial/pagina-inicial-component';
import { LoginFormComponent } from './seguranca/login/login.component'
import { CadastroComponent } from './Pages/cliente/cadastro/cadastro.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'}, // Definindo que a página inicial do site é a /pagina-inicial
  {path: 'login', component: LoginFormComponent},
  {path:'cadastro' , component:CadastroComponent},
  {path: 'paginaInicial', component: PaginaInicialComponent}
  

];

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterModuleModule { }

