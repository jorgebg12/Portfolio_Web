import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  public loginForm : FormGroup;
  public message = null;

  constructor(private fb: FormBuilder, 
    private userService : UserService){
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username:   ["",[Validators.required]],
      password:  ["",[Validators.required]]
    });
  }

  login(){

    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (v) => {
            console.log(v.msg);
            this.message = v.msg;
          },
          error: (e) => {
            console.log(e.error.msg);
            this.message = e.error.msg;
          },
          complete: () => console.info('complete')});
                          
    }else{
      this.message = 'Form not valid'
    }
  }

  get username() { return this.loginForm.get('username');}
  get password() { return this.loginForm.get('password');}
}
