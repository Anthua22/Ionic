import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ValidatorsModule } from '../validators/validators.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ValidatorsModule,
    NgxMapboxGLModule
  ]
})
export class ProductsModule { }
