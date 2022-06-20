import { Injectable } from '@angular/core';
import { Movie } from '../../Models/Movie/movie.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";
// import { Movie } from './../../Models/Movie/movie.model';
import { NewMovie } from 'src/app/shared/Models/Movie/createmovie.model';
import { UpdateMovie } from '../../Models/Movie/updatemovie.model';
import { map } from 'rxjs';


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

  createNewMovie(data : any){
    return this.http.post(this.apiUrl+ApiRoutes.Movies.create,data)
  }

  updateMovie(data : any,id:number){
    return this.http.post(this.apiUrl+ApiRoutes.Movies.update+id,data)
  }

  getMovieById(id: number){
    return this.http.get(this.apiUrl+ApiRoutes.Movies.show+id)
  }
}
