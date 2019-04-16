import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserInfo } from '../../shared/models/User-Info';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit, DoCheck {
  @ViewChild('form') editForm: NgForm;
  user: UserInfo
  id: string
  isNotGuest: boolean;
  instruments: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    
    this.instruments = this.user['instruments'].join(', ');
  }

  ngDoCheck() {
    if (this.authService.status !== 'Guest'){
      
      this.isNotGuest = true;
    } else {
      this.isNotGuest = false;
    }
  }

  editProfile(){
    if (this.editForm.value['about'] === ''){
      this.editForm.value['about'] = 'No information added.'
    } 
    
    if (this.editForm.value['profilePicture'] === ''){
      this.editForm.value['profilePicture'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45B3oRB-Xyfg3EWaCdbi4u6I7NAtVDZr4ikleo7VwMvJsw1KCtg';
    }

    console.log(this.editForm.value);

    this.authService.editUserProfile(this.authService.id, this.editForm.value)
    .subscribe((data) => {
      this.router.navigate(['profile/user', this.authService.id])
    })
  }

}
