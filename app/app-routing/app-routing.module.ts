import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EscuelaComponent } from '../component/escuela/escuela.component';

const routes:Routes =[
  {
    path:'escuela',
    component:EscuelaComponent
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
