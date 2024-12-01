import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  lastLessonId: number|null = null;
  /*private _lastLessonId: number|null = null;
  get lastLessonId(): number|null { return this._lastLessonId; }
  set lastLessonId(p: number|null) { this._lastLessonId = p;
  this.saveInfoToLocalStorage(); }*/
  constructor() { }
}
