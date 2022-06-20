import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/shared/Services/Movies/movies.service';
import{Movie} from '../../../shared/Models/Movie/movie.model'
import {Category} from'../../../shared/Models/Category/Category.model'
import {environment} from '../../../../environments/environment.prod'
import {CategoryService} from '../../../shared/Services/Category/category.service'


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @ViewChild('SelectedCategory') selected!: ElementRef  
  imageUrl = environment.imageUrl
  MoviesArray !: Movie[]
  Categories !: Category[]

  constructor(
     private moviesService : MoviesService,
     private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllCategorie();
  }

  getAllMovies(){
    this.moviesService.getAllMovies().subscribe((res : any) => {
      console.log(res)
      this.MoviesArray=res.message;
    })
  }

  getAllCategorie(){
    this.categoryService.getAllCategories().subscribe((res : any)=>{
      this.Categories = res.message;
    })
  }

  getMoviesByCategory(e : any){
    const id =+e.target?.value
    if(id){
      this.moviesService.getMoviesByCategory(id).subscribe((res : any)=>{
        this.MoviesArray=res.message;
      })
    }else{
      this.getAllMovies()
    }
  }


  deleteMovle(id:number){
    console.log(this.selected.nativeElement.value)
    this.moviesService.deleteMovie(id).subscribe((res:any)=>{
      console.log(res)
    this.getMoviesByCategory(this.selected.nativeElement.value)

    })
  }

}
