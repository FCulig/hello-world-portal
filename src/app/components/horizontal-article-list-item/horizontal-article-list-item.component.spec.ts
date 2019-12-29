import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalArticleListItemComponent } from './horizontal-article-list-item.component';

describe('HorizontalArticleListItemComponent', () => {
  let component: HorizontalArticleListItemComponent;
  let fixture: ComponentFixture<HorizontalArticleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalArticleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalArticleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
