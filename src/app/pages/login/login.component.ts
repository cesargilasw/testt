import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/notifications/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Property to identify the register form
  loginForm: FormGroup;
  // Property to identify if the form has been already submitted
  submitted = false;
  // Property to identify if a petition is in progress
  isLoading = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get formFields() {
    return this.loginForm.controls;
  }


  // Method to handle the submission event of the login form
  handleSubmit(): void {
    this.submitted = true;
    this.isLoading = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.isLoading = false;
      return;
    }


    this.router.navigate(["admin-panel"]);


    } 

}
