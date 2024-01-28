import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() post!: Post;
  displayType = 0;

  private displayMap = [
    () => `Title: ${this.post?.title}`,
    () => `USER: ${this.post?.userId}`,
    () => `POST: ${this.post?.id}`,
    () => `Description: ${this.post?.body}`
  ];

  private classMap = ['title', 'user-id', 'id', 'body'];

  get displayText(): string {
    return this.displayMap[this.displayType]?.() || '';
  }

  toggleDisplay() {
    this.displayType = (this.displayType + 1) % this.displayMap.length;
  }

  get currentClass(): string {
    return this.classMap[this.displayType] || '';
  }
}
