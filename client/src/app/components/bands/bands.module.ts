import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BandsRoutingModule } from './bands-routing.module';
import { BandInfoComponent } from './band-info/band-info.component';
import { BandsListComponent } from './bands-list/bands-list.component';
import { BandCreateComponent } from './band-create/band-create.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { BandEditComponent } from './band-edit/band-edit.component';

@NgModule({
  declarations: [
    BandsListComponent,
    BandInfoComponent,
    BandCreateComponent,
    BandDetailsComponent,
    BandEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }