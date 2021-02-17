import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductFormPage } from './product-form.page';
import { ValidatorsModule } from 'src/app/validators/validators.module';

const routes: Routes = [
  {
    path: '',
    component: ProductFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ValidatorsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductFormPage]
})
export class ProductFormPageModule {}
