import { Component, OnInit, Input } from '@angular/core';
import { BandInfo } from '../../shared/models/Band-Info';

@Component({
  selector: 'app-band-info',
  templateUrl: './band-info.component.html',
  styleUrls: ['./band-info.component.css']
})
export class BandInfoComponent implements OnInit {
  @Input() band: BandInfo
  
  constructor() { }

  ngOnInit() {
  }

}
