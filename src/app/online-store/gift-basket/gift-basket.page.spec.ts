import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftBasketPage } from './gift-basket.page';

describe('GiftBasketPage', () => {
  let component: GiftBasketPage;
  let fixture: ComponentFixture<GiftBasketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftBasketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftBasketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
