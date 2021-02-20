import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ProductLocationPage } from './product-location.page';
import { RouterModule, Routes } from '@angular/router';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


const routes: Routes = [
  {
    path: '',
    component: ProductLocationPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxMapboxGLModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductLocationPage]
})
export class ProductLocationPageModule {}
