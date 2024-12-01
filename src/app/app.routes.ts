import { Routes } from '@angular/router';
import {LessonEditFormComponent} from './lesson-edit-form/lesson-edit-form.component';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";

export const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-list', component: LessonListPageComponent },
  { path:'lesson/:id', component: LessonDetailPageComponent }
];
