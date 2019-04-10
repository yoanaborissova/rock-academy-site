import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements DoCheck {
  isLoggedOut: boolean;
  username: string;

  constructor(private authService: AuthService) { }

  ngDoCheck() {
    this.isLoggedOut = this.authService.isAnonymous();
    this.username = this.authService.username;
  }

}
