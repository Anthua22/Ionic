import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoProductPage } from './photo-product.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoProductPageRoutingModule {}
