import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @ViewChild('form') createCommentForm: NgForm;
  @Input() articleId: string;
  @Output() addCommentEmitter = new EventEmitter<Object>()

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  addComment() {
    const body = this.createCommentForm.value;

    body['article'] = this.articleId;
    body['user'] = this.authService.username;
    body['userId'] = this.authService.id;

    this.addCommentEmitter.emit(body);
    this.createCommentForm.reset();
  }

}
