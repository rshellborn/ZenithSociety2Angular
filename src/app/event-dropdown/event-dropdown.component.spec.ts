import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDropdownComponent } from './event-dropdown.component';

describe('EventDropdownComponent', () => {
  let component: EventDropdownComponent;
  let fixture: ComponentFixture<EventDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
