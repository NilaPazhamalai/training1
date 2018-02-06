import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTrainingComponent } from './about-training.component';

describe('AboutTrainingComponent', () => {
  let component: AboutTrainingComponent;
  let fixture: ComponentFixture<AboutTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
