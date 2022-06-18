import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(this.apiUrl+ApiRoutes.category.list);
  }


}
