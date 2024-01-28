import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from "./components/grid/grid.component";
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, GridComponent]
})
export class AppComponent {
  title = 'onehundredsquares';
  constructor(public dataService: DataService) {}
}
