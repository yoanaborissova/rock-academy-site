import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
 
@NgModule({
  declarations: [
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }