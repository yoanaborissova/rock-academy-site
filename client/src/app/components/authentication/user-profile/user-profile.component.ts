import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserInfo } from '../../shared/models/User-Info';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: string
  user: UserInfo
  bands: any
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private bandsService: BandsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.authService.getUserProfile(this.id)
      .subscribe((data) => {
        this.user = data['user'];
        this.bands = [];
        
        for (let band of this.user['bands']){
          this.bandsService.getBandDetails(band)
          .subscribe((data) => {
            this.bands.push({
              'id': band,
              'name': data['band']['name']
            })
          })
        }

        console.log(this.user);
      })
  }

}
