import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    this.authService
      .signIn(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/home']);
      })
  }
}
