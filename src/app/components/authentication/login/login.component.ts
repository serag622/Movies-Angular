import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
   private Router : Router
  ) { }

  ngOnInit(): void {
  }

  toRegister(){
  this.Router.navigate(['authentication/register'])
  }
}
