import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationInfo } from '../../shared/models/Application-Info';
import { JoinPipe } from 'angular-pipes';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent implements OnInit {
  @Input() application: ApplicationInfo
  @Output() approveEmitter = new EventEmitter<string>();
  @Output() disapproveEmitter = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit() {
    console.log(this.application);
  }

  approve(id) {
    this.approveEmitter.emit(id);
  }

  disapprove(id) {
    this.disapproveEmitter.emit(id);
  }
}
