import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeesapComponent } from './jeesap.component';

describe('JeesapComponent', () => {
  let component: JeesapComponent;
  let fixture: ComponentFixture<JeesapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeesapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeesapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
