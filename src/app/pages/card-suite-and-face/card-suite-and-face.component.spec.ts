import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuiteAndFaceComponent } from './card-suite-and-face.component';

describe('CardSuiteAndFaceComponent', () => {
  let component: CardSuiteAndFaceComponent;
  let fixture: ComponentFixture<CardSuiteAndFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSuiteAndFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuiteAndFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
