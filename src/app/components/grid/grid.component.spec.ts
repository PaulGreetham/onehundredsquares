import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { Post } from '../../models/post.model';
import { By } from '@angular/platform-browser';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 100 squares when provided with 100 posts', () => {
    const mockPosts: Post[] = Array.from({ length: 100 }, (_, i) => ({
      userId: i + 1,
      id: i + 1,
      title: `Title ${i + 1}`,
      body: `Body content for post ${i + 1}`,
    }));

    component.posts = mockPosts;
    fixture.detectChanges();

    const squareElements = fixture.debugElement.queryAll(By.css('app-square'));
    expect(squareElements.length).toEqual(100);
  });

  it('should populate squares with posts', () => {
    const mockPosts: Post[] = Array.from({ length: 100 }, (_, i) => ({
      userId: i + 1,
      id: i + 1,
      title: `Title ${i + 1}`,
      body: `Body content for post ${i + 1}`,
    }));

    component.posts = mockPosts;
    fixture.detectChanges();

    const squareElements = fixture.debugElement.queryAll(By.css('app-square'));
    const firstSquareContent = squareElements[0].nativeElement.textContent;
    expect(firstSquareContent).toContain(mockPosts[0].title);
  });

  it('should show correct animation delay for each square', () => {
    const mockPosts: Post[] = Array.from({ length: 100 }, (_, i) => ({
      userId: i + 1,
      id: i + 1,
      title: `Title ${i + 1}`,
      body: `Body content for post ${i + 1}`,
    }));

    component.posts = mockPosts;
    fixture.detectChanges();

    const indexToTest = 1, 7, 68;
    const expectedDelay = `${0.025 * indexToTest}s`;
    const squareElement = fixture.debugElement.queryAll(By.css('app-square'))[indexToTest];
    const style = squareElement.nativeElement.style;
    expect(style.animationDelay).toEqual(expectedDelay);
  });
});
