import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;
  date: Date = new Date();
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

}
