import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YardStorePage } from './yard-store.page';

describe('YardStorePage', () => {
  let component: YardStorePage;
  let fixture: ComponentFixture<YardStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YardStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YardStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
