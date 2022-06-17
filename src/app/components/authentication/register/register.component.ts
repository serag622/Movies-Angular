import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/shared/Services/auth/auth-services.service';
import { RegisterData } from 'src/app/shared/Models/user/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterFormGroup!: FormGroup;


  constructor(  
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private Router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.RegisterFormGroup = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      password:[null, Validators.required],
    })

  }


  Regsiter(){
    let form : RegisterData = {
      name :this.RegisterFormGroup.get('name')?.value,
      email : this.RegisterFormGroup.get('email')?.value,
      password: this.RegisterFormGroup.get('password')?.value
    }
    this.authService.UserRegister(form).subscribe((rea :any)=>{

    })
  }


  toLogin(){
    this.Router.navigate(['authentication/login'])
  }

}
