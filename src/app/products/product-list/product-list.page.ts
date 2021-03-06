import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private actionSheetCtrl: ActionSheetController, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      prods => this.products = prods
    );
  }
  doRefresh(event){
    this.productService.getProducts().subscribe(x=> {this.products = x;   event.target.complete();});
  
  }
  async showOptions(prod: Product) {
    if(prod.mine){
      const actSheet = await this.actionSheetCtrl.create({
        header: prod.description,
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.productService.deleteProduct(prod.id).subscribe(
              () => this.products.splice(this.products.indexOf(prod), 1)
            );
          }
        }, {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/products/details', prod.id]);
          }
        }, {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/products/edit', prod.id]);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }]
      });
  
      actSheet.present();
    }else{
      const actSheet = await this.actionSheetCtrl.create({
        header: prod.description,
        buttons: [ {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/products/details', prod.id]);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }]
      });
  
      actSheet.present();
    }
   
  }
}
