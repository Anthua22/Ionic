import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductresolverService } from './productresolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule),
    pathMatch: 'full'
  },
  { 
    path: 'add', 
    loadChildren: () => import('./product-form/product-form.module').then( m => m.ProductFormPageModule)
  },
  { 
    path: 'details/:id', 
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'product-location',
    loadChildren: () => import('./product-details/product-location/product-location.module').then( m => m.ProductLocationPageModule)
  },
  {
    path:'edit/:id',
    loadChildren:()=> import('./product-form/product-form.module').then( m => m.ProductFormPageModule),
    resolve:{
      product:ProductresolverService
    }
  },  {
    path: 'photos-product',
    loadChildren: () => import('./product-details/photos-product/photos-product.module').then( m => m.PhotosProductPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
