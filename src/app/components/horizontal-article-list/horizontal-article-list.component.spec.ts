import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalArticleListComponent } from './horizontal-article-list.component';

describe('HorizontalArticleListComponent', () => {
  let component: HorizontalArticleListComponent;
  let fixture: ComponentFixture<HorizontalArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
