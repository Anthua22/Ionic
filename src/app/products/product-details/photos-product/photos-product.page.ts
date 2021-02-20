import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductDetailsPage } from '../product-details.page';

@Component({
  selector: 'app-photos-product',
  templateUrl: './photos-product.page.html',
  styleUrls: ['./photos-product.page.scss'],
})
export class PhotosProductPage implements OnInit {
  product:Product;
  constructor( @Inject(ProductDetailsPage) private parentComponent: ProductDetailsPage) { }

  ngOnInit() {
    this.parentComponent.product$.subscribe(
      product => this.product = product
    );
  }

}
