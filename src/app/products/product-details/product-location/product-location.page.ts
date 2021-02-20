import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { Product } from '../../interfaces/product.interface';
import { ProductDetailsPage } from '../product-details.page';

@Component({
  selector: 'app-product-location',
  templateUrl: './product-location.page.html',
  styleUrls: ['./product-location.page.scss'],
})
export class ProductLocationPage implements OnInit,AfterViewInit  {
  product: Product;
  constructor(@Inject(ProductDetailsPage) private parentComponent: ProductDetailsPage) { }
  @ViewChild(MapComponent) mapComp: MapComponent;
  ngOnInit() {
    if (!this.product) {
      this.parentComponent.product$.subscribe(
        product => this.product = product
      );
      
    }

  }

  ngAfterViewInit() {
    this.mapComp.load.subscribe(
      () => {
        this.mapComp.mapInstance.resize(); // Necessary for full height
      }
    );
  }

}
