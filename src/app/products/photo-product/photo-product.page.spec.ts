import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoProductPage } from './photo-product.page';

describe('PhotoProductPage', () => {
  let component: PhotoProductPage;
  let fixture: ComponentFixture<PhotoProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
