import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const applicationRoutes: Routes = [
    { path: '', component: ApplicationsListComponent, canActivate: [AdminGuard]},
    { path: 'apply', component: ApplicationCreateComponent, canActivate: [ AuthGuard ]}
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