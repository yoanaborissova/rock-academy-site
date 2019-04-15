import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.css']
})
export class BandEditComponent implements OnInit, DoCheck {
  @ViewChild('form') editForm: NgForm;

  id: string;
  isMember: boolean;
  isAdmin: boolean;
  band: BandInfo;

  constructor(
    private route: ActivatedRoute,
    private bandsService: BandsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.band = this.route.snapshot.data['band'];

    for (let member of this.band.members) {
      if (member['_id'] === this.authService.id) {
        this.isMember = true;
      }
    }

  }

  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
  }

  editBand() {
    this.bandsService.editBand(this.band._id, this.editForm.value)
      .subscribe((data) => {
        this.router.navigate(['/bands/details/', this.id])
      })
  }
}
