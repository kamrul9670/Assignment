import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


import { FormGroup, FormControl, Validators ,FormControlName } from '@angular/forms'; 

@Component({
  selector: 'app-login-page-design',
  template: `
   

   <div class="card">
      <h2 class="nokia">NOKIA</h2>
      <div class="faciliviss">FACILIVISS</div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div class="input-container">
          <img src="assets/images/user.png" id="input-img1">
          <input id="einput" type="email" placeholder="Email" formControlName="email" required>
          <div class="validation-message" id="email-validation-message" *ngIf="form.controls.email.invalid && form.controls.email.touched">
            Please enter a valid email.
          </div>
          <br>
          <img src="assets/images/lock.png" id="input-img2">
          <input id="pinput" [type]="showPassword ? 'text' : 'password'" placeholder="Password" formControlName="password" required>
          <div class="validation-message" id="password-validation-message" *ngIf="form.controls.password.invalid && form.controls.password.touched">
            Password should be a minimum of 6 characters.
          </div>
          <img src="assets/images/{{showPassword ? 'hide.png' : 'show.png'}}" id="show-password" (click)="togglePasswordVisibility()" style="cursor: pointer;">
        </div>
        <div class="rem-forget">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" id="btn" [disabled]="form.invalid">Submit</button>
      </form>
    </div>

  `,
  styles: [`
  
  
  
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
   
  
}


.card 
{
  width: 90%;
  max-width: 470px;
  background: 
  #f5f5f5;

  margin: 100px auto 0;
 
  padding: 40px 35px;
  text-align: center;
} 
.nokia 
{
    color: darkblue;
    padding: 10px;
    font-size: 25px;
    font-weight: 750;
}
.faciliviss
{
    color: darkslategrey;
     
}


.input-container
{
    position: relative;
    padding: 0;
    margin: 0;
}
#einput {
    height: 38px;
 
    padding-left: 40px;
    border-radius: 5px;
    width: 90%;
 
}
#pinput {
    height: 38px;
    margin-top: 18px;
    padding-left: 40px;
    border-radius: 5px;
    width: 90%;
 
}
#show-password {
    position: absolute;
    bottom: 8px;
   left: 85%;
    width: 20px;
    height: 25px;
    
}
#input-img1
{
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: 10px;
    margin-left: 5px;
  

}
#input-img2
{
    width: 20px;
    height: 20px;
    position: absolute;
   margin-top: 30px;
    margin-left: 5px;

}

.rem-forget
{
    margin: 20px;
    margin-left: 60%;
}

#btn  {

    width: 90%;
    height: 35px;
    background-color: darkblue;
    color: whitesmoke;
    cursor: pointer;
}
#btn[disabled] {
    cursor: not-allowed;
  }

  .validation-message {
      color: red; /* Set the text color to red */
      font-size: 12px;
      text-align: left;
    }
    .success-message {
      color: green; /* Set the text color to green */
      font-size: 16px;
      text-align: center;
    }


  
  
  
  
  
  `
  ]
})
export class LoginPageDesignComponent {

  title = 'datavissAssignment';

  showPassword = false; // To track password visibility
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  


  constructor(private router: Router, private route: ActivatedRoute) {}


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // Handle form submission here

    if (this.form.valid) {
      // Display a success message using the browser's alert dialog
      alert('Success');
  
      // Navigate to the Dashboard component
    
      this.router.navigate(['/dashBoard']); // Replace 'dashboard' with the actual route to your Dashboard component
    }


  }



}
