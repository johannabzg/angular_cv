import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonXPComponent } from './mon-xp.component';

describe('MonXPComponent', () => {
  let component: MonXPComponent;
  let fixture: ComponentFixture<MonXPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonXPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonXPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
