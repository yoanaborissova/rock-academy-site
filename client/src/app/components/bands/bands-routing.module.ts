import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsListComponent } from './bands-list/bands-list.component';
import { BandCreateComponent } from './band-create/band-create.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { BandAddMemberComponent } from './band-add-member/band-add-member.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { OwnerGuard } from 'src/app/core/guards/owner.guard';
import { SingleBandResolver } from 'src/app/core/resolvers/single-band.resolver';

const bandsRoutes: Routes = [
    { path: '', component: BandsListComponent},
    { path: 'create', component: BandCreateComponent, canActivate: [AdminGuard]},
    { path: 'details/:id', component: BandDetailsComponent, resolve: {band: SingleBandResolver}},
    { path: 'edit/:id', component: BandEditComponent, canActivate: [ OwnerGuard ], resolve: {band: SingleBandResolver}},
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