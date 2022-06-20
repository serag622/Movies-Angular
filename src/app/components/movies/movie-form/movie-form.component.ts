import { Component, OnInit  , ViewChild , ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryService } from 'src/app/shared/Services/Category/category.service';
import { MoviesService } from 'src/app/shared/Services/Movies/movies.service';
import { Category} from'../../../shared/Models/Category/Category.model'
import { Movie } from 'src/app/shared/Models/Movie/movie.model';
import {UpdateMovie} from 'src/app/shared/Models/Movie/updatemovie.model'
import { NewMovie } from 'src/app/shared/Models/Movie/createmovie.model';
import { AppRoutes } from 'src/app/shared/Models/app/AppRoutes';
import {environment} from '../../../../environments/environment.prod'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @ViewChild('SelectedCategory') selected!: ElementRef;
  @ViewChild('Image') ImageFile!: ElementRef;


  imageUrl = environment.imageUrl

  FormGroup!: FormGroup;
  isUpdate : boolean = false;
  Categories !: Category[];
  selectedMovie !: Movie;
  image :any =null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService : CategoryService,
    private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.getFormPreData();
    this.initForm();
  }

  getFormPreData(){
    this.categoryService.getAllCategories().subscribe((res : any)=>{
      this.Categories = res.message;
    })
  }


  initForm(){
    this.FormGroup = this.formBuilder.group({
      name:[null, Validators.required],
      image:[null, Validators.required],
      description:[null, Validators.required],
      category_id:[null,Validators.required]
    })

    this.checkForUpdate();

  }


  checkForUpdate(){
    const route = this.activatedRoute.snapshot.url[0].path;
    console.log(route)
    if(route === 'new')
    {
      this.isUpdate=false;
    }
    else
    {
      this.isUpdate=true;
      const MovieId = +this.activatedRoute.snapshot.params['id'];
      console.log(MovieId);
      this.moviesService.getMovieById(MovieId).subscribe((res:any)=>{
        console.log(res)
        this.selectedMovie = res.message;
        this.setMovieData(res.message)
      })
    }
  }

  

  setMovieData(saveMovieData : Movie){
    const patchData : UpdateMovie={
      name : saveMovieData.name,
      image : saveMovieData.image,
      description :saveMovieData.description,
      category_id : saveMovieData.category_id,
    }

    this.FormGroup.patchValue(patchData)
  }

  createMovie(){

    const form  = new FormData()
    form.append('name',this.FormGroup.get('name')?.value)
    form.append('image',this.image,this.image.name)
    form.append('description',this.FormGroup.get('description')?.value)
    form.append('category_id',this.FormGroup.get('category_id')?.value)
    console.log(form)
    this.moviesService.createNewMovie(form).subscribe((res : any)=>{
      console.log(res)
      this.router.navigate([AppRoutes.Movies.sub]);
    },(e)=>{
      console.log(e)
    })
  }

  updateMovie(){
    const form  = new FormData()
    form.append('name',this.FormGroup.get('name')?.value)
    form.append('description',this.FormGroup.get('description')?.value)
    form.append('category_id',this.FormGroup.get('category_id')?.value)
    form.append('_method','put')

    if(this.image){
      form.append('image',this.image,this.image.name)
    }
    else{
      form.append('image',this.selectedMovie.image)
    }
    this.moviesService.updateMovie(form,this.selectedMovie.id).subscribe((res :any)=>{
      console.log(res)
      this.router.navigate([AppRoutes.Movies.sub]);
    },(e)=>{
      console.log(e)
    })

  }


  onFileChange(event : any) {
    console.log(event)
    this.image = event.target.files[0]
    console.log(this.image)

   this.ImageFile.nativeElement.src = URL.createObjectURL(event.target.files[0])
  }


}
