import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailedGiftbasketPage } from './detailed-giftbasket.page';

describe('DetailedGiftbasketPage', () => {
  let component: DetailedGiftbasketPage;
  let fixture: ComponentFixture<DetailedGiftbasketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedGiftbasketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedGiftbasketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
