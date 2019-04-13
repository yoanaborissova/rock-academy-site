import { Component, OnInit, Input } from '@angular/core';
import { ArticleInfo } from '../../shared/models/Article-Info';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})

export class ArticleInfoComponent implements OnInit {
  @Input() article: ArticleInfo
  constructor() { }

  ngOnInit() {
  }

}
