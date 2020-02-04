import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InnPage } from './inn.page';

describe('InnPage', () => {
  let component: InnPage;
  let fixture: ComponentFixture<InnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
