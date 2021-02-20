import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditinfoPage } from './editinfo.page';

describe('EditinfoPage', () => {
  let component: EditinfoPage;
  let fixture: ComponentFixture<EditinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
