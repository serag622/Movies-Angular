import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutes } from "../../shared/Models/app/AppRoutes";
import{MoviesListComponent} from './movies-list/movies-list.component';
import { MovieFormComponent } from "./movie-form/movie-form.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: AppRoutes.Movies.sub,
        component: MoviesListComponent,
      },
      {
        path: AppRoutes.Movies.new.main,
        component: MovieFormComponent,
      },
      {
        path: AppRoutes.Movies.edit.main,
        component: MovieFormComponent
      }
    ],
  },
];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MoviesRoutingModule {}
