import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineStorePage } from './online-store.page';

describe('OnlineStorePage', () => {
  let component: OnlineStorePage;
  let fixture: ComponentFixture<OnlineStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
