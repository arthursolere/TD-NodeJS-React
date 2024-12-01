import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-search-page',
  imports: [],
  templateUrl: './lesson-search-page.component.html',
  styleUrl: './lesson-search-page.component.css'
})
export class LessonSearchPageComponent {
  isAdvanced = false;

  toggleSearchMode() {
    this.isAdvanced = !this.isAdvanced;
  }
}
