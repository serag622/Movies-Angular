import { Injectable } from '@angular/core';
import { Movie } from '../../Models/Movie/movie.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllMovies(){
    return this.http.get(this.apiUrl+ApiRoutes.Movies.list);
  }

  getMoviesByCategory(id : number){
    return this.http.get(this.apiUrl+ApiRoutes.Movies.moviesByCategory+id)
  }

  deleteMovie(id:number){
    return this.http.post(this.apiUrl+ApiRoutes.Movies.delete+id,{_method:'delete'})
  }

  createNewMovie(){
    // return this.http.post(this.apiUrl+ApiRoutes.Movies.create,)
  }
}
