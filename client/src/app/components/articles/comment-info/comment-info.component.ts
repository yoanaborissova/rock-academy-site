import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { CommentInfo } from '../../shared/models/Comment-Info';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})

export class CommentInfoComponent implements OnInit, DoCheck {
  @Input() comment: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<Object>();
  isOwner: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
    if (this.comment['userId'] === this.authService.id) {
      this.isOwner = true;
    }
    else {
      this.isOwner = false;
    }
  }

  deleteComment(id) {
    this.deleteCommentEmitter.emit(id);

    console.log('here')
  }
}


