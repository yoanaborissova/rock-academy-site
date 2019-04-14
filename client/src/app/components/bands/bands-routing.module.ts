import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsListComponent } from './bands-list/bands-list.component';
import { BandCreateComponent } from './band-create/band-create.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { BandAddMemberComponent } from './band-add-member/band-add-member.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { OwnerGuard } from 'src/app/core/guards/owner.guard';

const bandsRoutes: Routes = [
    { path: '', component: BandsListComponent},
    { path: 'create', component: BandCreateComponent, canActivate: [AdminGuard]},
    { path: 'details/:id', component: BandDetailsComponent},
    { path: 'edit/:id', component: BandEditComponent, canActivate: [ OwnerGuard ]},
    { path: 'add/member/:id', component: BandAddMemberComponent, canActivate: [AdminGuard]}   
]

@NgModule({
    imports: [
        RouterModule.forChild(bandsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BandsRoutingModule{};