import { Component, OnInit, DoCheck } from '@angular/core';
import { ArticleInfo } from '../../shared/models/Article-Info';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit, DoCheck {
  allArticles: ArticleInfo;
  isAdmin: boolean;

  constructor(
    private articlesService: ArticlesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.articlesService.getAllArticles()
    .subscribe((data) => {
      this.allArticles = data['resArticles'];
    })
  }

  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
  }

}
