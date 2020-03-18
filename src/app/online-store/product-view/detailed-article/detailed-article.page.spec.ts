import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailedArticlePage } from './detailed-article.page';

describe('DetailedArticlePage', () => {
  let component: DetailedArticlePage;
  let fixture: ComponentFixture<DetailedArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
