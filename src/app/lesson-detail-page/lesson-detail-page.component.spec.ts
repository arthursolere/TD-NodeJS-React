import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailPageComponent } from './lesson-detail-page.component';

describe('LessonDetailPageComponent', () => {
  let component: LessonDetailPageComponent;
  let fixture: ComponentFixture<LessonDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
