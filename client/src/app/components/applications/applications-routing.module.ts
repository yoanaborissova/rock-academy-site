import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';

const applicationRoutes: Routes = [
    { path: '', component: ApplicationsListComponent},
    { path: 'apply', component: ApplicationCreateComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ApplicationRoutingModule{}