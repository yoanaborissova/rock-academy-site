import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationRoutingModule } from './applications-routing.module';
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { NgPipesModule } from 'angular-pipes';
import { ApplicationCreateComponent } from './application-create/application-create.component';

@NgModule({
  declarations: [
    ApplicationsListComponent,
    ApplicationInfoComponent,
    ApplicationCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationRoutingModule,
    NgPipesModule
  ]
})

export class ApplicationsModule { }
