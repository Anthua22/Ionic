import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductLocationPage } from './product-location.page';

describe('ProductLocationPage', () => {
  let component: ProductLocationPage;
  let fixture: ComponentFixture<ProductLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
