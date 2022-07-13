import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports:
  [
    CommonModule,
    RouterModule,
    TooltipModule,
    ButtonModule,
    HttpClientModule
  ]
})
export class PaginaInicialModule { }

