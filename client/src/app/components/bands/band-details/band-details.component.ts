import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit, DoCheck {
  id: string;
  band: BandInfo;
  isAdmin: boolean;
  isMember: boolean;
  userId: string;

  constructor(
    private route: ActivatedRoute,
    private bandsService: BandsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadDetails();
  }

  loadDetails() {
    this.id = this.route.snapshot.params['id'];

    this.bandsService.getBandDetails(this.id)
    .subscribe((data) => {
      this.band = data['band'];

      for (let member of this.band.members) {
        if (member['_id'] === this.authService.id){
          this.isMember = true;
        }
      }
    })
  }

  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
    this.userId = this.authService.id;
  }

  removeMember(id, member) {
    this.bandsService.removeBandMember(id, {
      'member': member
    })
    .subscribe((data) => {
      this.isMember = false;
      this.loadDetails();
    })
  }

  deleteBand(id) {
    this.bandsService.deleteBand(id, this.band)
    .subscribe((data) => {
      this.router.navigate(['/bands']);
    })
  }
}
