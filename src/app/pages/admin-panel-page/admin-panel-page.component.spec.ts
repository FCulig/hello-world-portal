import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelPageComponent } from './admin-panel-page.component';

describe('AdminPanelPageComponent', () => {
  let component: AdminPanelPageComponent;
  let fixture: ComponentFixture<AdminPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
