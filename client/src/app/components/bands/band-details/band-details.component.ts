import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit {
  id: string;
  band: BandInfo;

  constructor(
    private route: ActivatedRoute,
    private bandsService: BandsService,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];

     this.bandsService.getBandDetails(this.id)
    .subscribe((data) => {
      this.band = data['band'];
      //console.log(data['band'])
    })
  }

}
