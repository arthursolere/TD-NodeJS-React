import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonListPageComponent } from './lesson-list-page.component';

describe('LessonListPageComponent', () => {
  let component: LessonListPageComponent;
  let fixture: ComponentFixture<LessonListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
