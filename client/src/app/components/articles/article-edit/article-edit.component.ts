import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ArticleInfo } from '../../shared/models/Article-Info';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  @ViewChild('form') editForm: NgForm;
  article: ArticleInfo;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.articlesService.getArticleDetails(this.id)
    .subscribe((data) => {
      this.article = data['article'];
    })
  }

  editArticle() {
    this.articlesService.editArticle(this.id, this.editForm.value)
    .subscribe((data) => {
      this.router.navigate(['/articles/details', this.id]);
    })
  }
}
