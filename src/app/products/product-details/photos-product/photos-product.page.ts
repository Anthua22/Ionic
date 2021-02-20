import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductDetailsPage } from '../product-details.page';

@Component({
  selector: 'app-photos-product',
  templateUrl: './photos-product.page.html',
  styleUrls: ['./photos-product.page.scss'],
})
export class PhotosProductPage implements OnInit {
  product:Product;
  constructor( @Inject(ProductDetailsPage) private parentComponent: ProductDetailsPage,private router:Router) { }

  ngOnInit() {
    this.parentComponent.product$.subscribe(
      product => this.product = product
    );
  }
  goPhotos(){
    this.router.navigate(['/products/photos',this.product.id]);
  }
}
