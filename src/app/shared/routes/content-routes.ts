import { Routes } from "@angular/router";
import { AppRoutes } from "../Models/app/AppRoutes";


export const content: Routes = [
   {
      path: AppRoutes.home.main,
      loadChildren: () => import("../../components/movies/movies.module").then((m) => m.MoviesModule),
   },
   {
      path: AppRoutes.Movies.main,
      loadChildren: () => import("../../components/movies/movies.module").then((m) => m.MoviesModule),
   },
];
