import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, DoCheck {
  username: string = '';
  id: string;
  guestStatus: boolean;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
  status: string;
  isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.username = this.authService.username;
    this.id = this.authService.id;
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isLoggedOut = this.authService.isAnonymous();
    this.status = this.authService.status;
    this.isAdmin = this.authService.isAdmin();

    if (this.authService.status == 'Guest'){
      
      this.guestStatus = true;
    } else {
      this.guestStatus = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
    this.toastrService.success('Successfully logged out!');
  }

}
