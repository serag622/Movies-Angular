import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    ContentLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
