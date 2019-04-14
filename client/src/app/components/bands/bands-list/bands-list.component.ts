import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BandInfo } from '../../shared/models/Band-Info';
import { BandsService } from 'src/app/core/services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.css']
})
export class BandsListComponent implements OnInit {
  allBands$: Observable<BandInfo[]>;
  isAdmin: boolean;

  constructor(
    private bandsService: BandsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.bandsService.getAllBands()
    //   .subscribe((data) => {
    //     this.allBands = data['resBands'];
    //   })

    this.allBands$ = this.bandsService.getAllBands();

    this.isAdmin = this.authService.isAdmin();  
  }

}
