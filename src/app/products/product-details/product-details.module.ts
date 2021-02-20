import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPage } from './product-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage,
    children: [
      { 
        path: 'info', 
        loadChildren: () => import('./product-info/product-info.module').then( m => m.ProductInfoPageModule)

      },
      { 
        path: 'photos', 
        loadChildren: () => import('./photos-product/photos-product.module').then( m => m.PhotosProductPageModule)
      },
      {
        path: 'location',
        loadChildren: ()=>import('./product-location/product-location.module').then(m=> m.ProductLocationPageModule)
      },
     
      { path: '', pathMatch: 'full', redirectTo: 'info' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
