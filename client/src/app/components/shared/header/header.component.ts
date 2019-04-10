import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, DoCheck {
  username: string = '';
  id: string;
  studentStatus: boolean;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
  status: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.username = this.authService.username;
    this.id = this.authService.id;
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isLoggedOut = this.authService.isAnonymous();
    this.status = this.authService.status;

    if (this.authService.status == 'Student'){
      
      this.studentStatus = true;
    } else {
      this.studentStatus = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
