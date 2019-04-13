import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  @ViewChild('form') createForm: NgForm;

  constructor(
    private articlesService: ArticlesService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  createArticle(){
    this.articlesService.createArticle(this.createForm.value)
    .subscribe((data) => {
      this.router.navigate(['/articles']);
    })
  }
}
