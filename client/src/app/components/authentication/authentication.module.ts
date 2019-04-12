import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ]
})

export class AuthenticationModule { }