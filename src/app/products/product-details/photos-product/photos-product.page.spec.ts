import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotosProductPage } from './photos-product.page';

describe('PhotosProductPage', () => {
  let component: PhotosProductPage;
  let fixture: ComponentFixture<PhotosProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
