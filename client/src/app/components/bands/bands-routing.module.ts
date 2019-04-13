import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsListComponent } from './bands-list/bands-list.component';
import { BandCreateComponent } from './band-create/band-create.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { BandAddMemberComponent } from './band-add-member/band-add-member.component';

const bandsRoutes: Routes = [
    { path: '', component: BandsListComponent},
    { path: 'create', component: BandCreateComponent},
    { path: 'details/:id', component: BandDetailsComponent},
    { path: 'edit/:id', component: BandEditComponent},
    { path: 'add/member/:id', component: BandAddMemberComponent}   
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