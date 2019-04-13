import { Component, OnInit, ViewChild } from '@angular/core';
import { BandsService } from 'src/app/core/services/bands.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../../shared/models/User-Info';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-band-add-member',
  templateUrl: './band-add-member.component.html',
  styleUrls: ['./band-add-member.component.css']
})
export class BandAddMemberComponent implements OnInit {
  @ViewChild('form') form: NgForm
  users: UserInfo[];
  id: string

  constructor(
    private bandsService: BandsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.authService.getAvailableUsers(this.id)
    .subscribe((data) => {
      this.users = data['users'];
    })
  }

  addMember(){
    this.bandsService.addBandMember(this.id, this.form.value)
    .subscribe((data) => {
      this.router.navigate(['/bands/details', this.id]);
    })
  }

}
