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
  isLoggedIn: boolean;
  isLoggedOut: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.username = this.authService.username;
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isLoggedOut = this.authService.isAnonymous();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
