import { Component, OnInit } from '@angular/core';
import { ApplicationInfo } from '../../shared/models/Application-Info';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {
  applications: ApplicationInfo[];
  
  constructor(
    private applicationsService: ApplicationsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listApplications();
  }

  listApplications() {
    this.applicationsService.getAllApplications()
    .subscribe((data) => {
      this.applications = data['applications'];

      for (const application of this.applications) {
        this.authService.getUserProfile(application['user'])
        .subscribe((data) => {
          application['username'] = data['user']['username'];
        })
      }
    })
  }

  approve(id: string) {
    this.applicationsService.approveApplication(id)
    .subscribe((data) => {
      this.listApplications();
    })
  }

  disapprove(id: string) {
    this.applicationsService.disapproveApplication(id)
    .subscribe((data) => {
      this.listApplications();
    })
  }
}
