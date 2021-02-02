import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeatPartsPage } from './meat-parts.page';

describe('MeatPartsPage', () => {
  let component: MeatPartsPage;
  let fixture: ComponentFixture<MeatPartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatPartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeatPartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
