import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterDataPage } from './enter-data.page';

describe('EnterDataPage', () => {
  let component: EnterDataPage;
  let fixture: ComponentFixture<EnterDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
