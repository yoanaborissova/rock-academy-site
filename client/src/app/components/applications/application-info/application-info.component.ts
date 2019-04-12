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
  @Output() approveEmitter = new EventEmitter<string>()
  
  constructor(
    private applicationService: ApplicationsService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  approve(id) {
    // this.applicationService.approveApplication(id)
    // .subscribe((data) => {
    //   console.log(data)
    //   this.router.navigate(['/applications']);
    // })

    this.approveEmitter.emit(id);
  }

}
