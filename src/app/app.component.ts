import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passworChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'signup-reactive';
  registerForm: FormGroup
  submited=false

  constructor(private fb : FormBuilder){}

  ngOnInit():void {

    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      termsAndConditions:[false,Validators.requiredTrue]
    },{
      validators:passworChecker('password','confirmpassword')
    })

  }
  

  get registerFormelement(){
    return this.registerForm.controls
  }

  onSubmit(){
    console.log('aaaa')
    this.submited=true
    // if(this.registerForm.invalid){
    //   return;
    // }
    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert(`successfully submited ${JSON.stringify(this.registerForm.value)}`)
  }

  onReset(){
    this.submited=false;
    this.registerForm.reset()
  }



}
