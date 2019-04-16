import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  @ViewChild('form') createApplicationForm: NgForm;
  user: string;

  constructor(
    private applicationService: ApplicationsService,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.user = this.authService.id;
  }

  createApplication(){
    this.applicationService.createApplication(this.createApplicationForm.value)
    .subscribe((data) => {
      this.router.navigate(['/home']);
      this.toastrService.info('Our team will examine your request as soon as possible!', 'Successful application!')
    })

  }
}
