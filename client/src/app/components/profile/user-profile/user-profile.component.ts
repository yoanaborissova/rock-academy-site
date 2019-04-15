import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserInfo } from '../../shared/models/User-Info';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, DoCheck {
  id: string
  user: UserInfo
  bands$: Observable<BandInfo[]>;
  isOwner: boolean
  status: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private bandsService: BandsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.authService.getUserProfile(routeParams.id)
        .subscribe((data) => {
          this.user = data;

          this.status = this.user['status'];
          this.bands$ = this.bandsService.getUserBands(routeParams.id);
        })
    });
  }

  ngDoCheck() {
    if (this.route.snapshot.params['id'] === this.authService.id) {
      this.isOwner = true;
    } else {
      this.isOwner = false;
    }
  }

}
