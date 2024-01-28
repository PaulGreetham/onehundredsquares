import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() posts: Post[] = [];

  getAnimationDelay(index: number): string {
    return `${0.025 * index}s`;
  }
}
