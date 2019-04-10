import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsListComponent } from './bands-list/bands-list.component';
import { BandCreateComponent } from './band-create/band-create.component';
import { BandDetailsComponent } from './band-details/band-details.component';

const bandsRoutes: Routes = [
    { path: '', component: BandsListComponent},
    { path: 'create', component: BandCreateComponent},
    { path: 'details/:id', component: BandDetailsComponent}   
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