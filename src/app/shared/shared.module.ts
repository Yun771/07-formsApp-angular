import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  exports: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,

  ]
})
export class SharedModule { }
