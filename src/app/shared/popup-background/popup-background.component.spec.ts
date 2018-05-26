import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBackgroundComponent } from './popup-background.component';

describe('PopupBackgroundComponent', () => {
  let component: PopupBackgroundComponent;
  let fixture: ComponentFixture<PopupBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
