import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/shared/Services/auth/auth-services.service';
import { LoginData } from 'src/app/shared/Models/user/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;

  constructor(
   private authService: AuthService,
   private formBuilder: FormBuilder,
   private Router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.loginFormGroup)
  }

  //init form properties
  initForm(){
    this.loginFormGroup = this.formBuilder.group({
      email:[null, Validators.required],
      password:[null, Validators.required],
    })

  }

  //return controlls of the form
  public get loginControl(){
    return this.loginFormGroup.controls
  }

  login(){
    let form : LoginData = {
      email : this.loginFormGroup.get('email')?.value,
      password: this.loginFormGroup.get('password')?.value
    }
    this.authService.UserLogin(form).subscribe((rea :any)=>{

    })
  }


  toRegister(){
  this.Router.navigate(['authentication/register'])
  }
}
