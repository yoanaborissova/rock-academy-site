import { Component, OnInit, ViewChild } from '@angular/core';
import { BandsService } from 'src/app/core/services/bands.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-create',
  templateUrl: './band-create.component.html',
  styleUrls: ['./band-create.component.css']
})
export class BandCreateComponent implements OnInit {
  @ViewChild('f') form: NgForm
  
  constructor(
    private bandsService: BandsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createBand() {
    this.bandsService.createBand(this.form.value)
    .subscribe((data) => {

      this.router.navigate(['/bands']);
    })
  }
}
