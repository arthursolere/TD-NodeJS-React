import { Component } from '@angular/core';
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-list-page',
  imports: [],
  templateUrl: './lesson-list-page.component.html',
  styleUrl: './lesson-list-page.component.css'
})
export class LessonListPageComponent {
  constructor(private userSettingsService: UserSettingsService) {
    console.log("get lastLessonId:", userSettingsService.lastLessonId);
  }
}
