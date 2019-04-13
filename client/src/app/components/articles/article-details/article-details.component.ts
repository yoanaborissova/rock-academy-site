import { Component, OnInit, DoCheck } from '@angular/core';
import { ArticleInfo } from '../../shared/models/Article-Info';
import { CommentInfo } from '../../shared/models/Comment-Info';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommentsService } from 'src/app/core/services/comments.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, DoCheck {
  id: string;
  article: ArticleInfo;
  isAdmin: boolean;
  isAuthed: boolean;
  comments: CommentInfo[];

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private authService: AuthService,
    private commentsService: CommentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.id = this.route.snapshot.params['id'];

    this.articlesService.getArticleDetails(this.id)
    .subscribe((data) => {
      this.article = data['article'];
    })

    this.commentsService.getArticleComments(this.id)
    .subscribe((data)=>{
      this.comments = data['comments'];
    })
  }

  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
    this.isAuthed = this.authService.isAuthenticated();
  }

  deleteArticle(id) {
    this.articlesService.deleteArticle(id, this.article)
    .subscribe((data) => {
      this.router.navigate(['/articles']);
    })
  }

  addComment(body){
    this.commentsService.createComment(body)
    .subscribe((data) => {
      console.log(data);
      this.loadData();
    })
  }

  deleteComment(id){
    this.commentsService.deleteComment(id, {
      'user': this.authService.username,
      'article': this.article['_id']
    })
    .subscribe((data) => {
      this.loadData();
    })
  }

}
