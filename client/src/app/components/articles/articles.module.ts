import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentInfoComponent } from './comment-info/comment-info.component';
 
@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleInfoComponent,
    ArticleDetailsComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    CommentCreateComponent,
    CommentInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }