import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import{MoviesRoutingModule} from './movies-routing.module'



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
