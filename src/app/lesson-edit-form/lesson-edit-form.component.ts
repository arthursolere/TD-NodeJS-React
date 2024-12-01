import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonPackage } from '../lesson-package';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-edit-form',
  imports: [FormsModule],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  prerequisiteInput: string = '';
  tagsInput: string = '';

  lesson: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };

  saveLesson() {
    console.log('Lesson saved:', this.lesson);

    this.lesson.prerequisite = this.prerequisiteInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item);

    this.lesson.tags = this.tagsInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item);

    this.userSettingsService.lastLessonId = 1234;
    this.router.navigate(['lesson-list']).then(res => {})
  }

  constructor(private router: Router, private userSettingsService: UserSettingsService) {
    console.log("LessonListPageComponent.constructor()");
  }
  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
  }
  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }
}
