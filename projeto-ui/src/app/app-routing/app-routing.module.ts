import { LoginComponent } from './../seguranca/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from '../pages/cliente/cadastro/cadastro.component';

const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path:'cadastro' , component: CadastroComponent},
];

@NgModule({
  imports: [CommonModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
