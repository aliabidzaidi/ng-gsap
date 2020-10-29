import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperplaneComponent } from './paperplane.component';

describe('PaperplaneComponent', () => {
  let component: PaperplaneComponent;
  let fixture: ComponentFixture<PaperplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
