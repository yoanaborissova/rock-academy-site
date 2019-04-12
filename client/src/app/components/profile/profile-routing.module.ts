import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const profileRoutes: Routes = [
    { path: '', redirectTo: 'home'},
    { path: 'user/:id', component: UserProfileComponent },
    { path: 'edit/:id', component: ProfileEditComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule{}