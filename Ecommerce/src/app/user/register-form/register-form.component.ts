import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  public registerForm : FormGroup;
  public message = null;

  constructor(private fb: FormBuilder, 
    private userService : UserService){
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username:   ["",[Validators.required]],
      password:  ["",[Validators.required]]
    });
  }

  register(){

    if(this.registerForm.valid){
      
      this.userService.register(this.registerForm.value.username)
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

  get username() { return this.registerForm.get('username');}
  get password() { return this.registerForm.get('password');}
}
