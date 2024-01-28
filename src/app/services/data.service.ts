import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, startWith, filter } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.http.get<Post[]>(this.apiUrl).pipe(
      catchError(this.handleError),
      tap(posts => this.postsSubject.next(posts))
    ).subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error loading posts', error);
    return throwError(() => new Error('Failed to load posts'));
  }
}
