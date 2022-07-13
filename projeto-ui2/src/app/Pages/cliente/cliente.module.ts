import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    CadastroComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    CadastroComponent,
  ]
})
export class ClienteModule{}