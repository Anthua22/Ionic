import { Component, NgZone, OnInit } from '@angular/core';
import { Product, ProductAdd } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { ToastController, NavController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';
import { ActivatedRoute, Router } from '@angular/router';
const { Camera } = Plugins;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {
  productRecive!: Product;

  title = 'Add Product';
  newProd: ProductAdd = {
    description: '',
    title: '',
    price: 0,
    category: 0,
    mainPhoto: ''
  };

  categories: Category[];

  constructor(
    private productService: ProductService,
    private toastCtrl: ToastController,
    private categoryService: CategoriesService,
    private nav: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(resp => {
      this.categories = resp
    });

    this.route.data.subscribe(
      x => {
        let product: Product = x.product;
        if (product && product.mine) {
          this.title = 'Edit Product';
          this.productRecive = product;
          this.getData(this.productRecive)
        } else {
          this.router.navigate(['/products/add']);
        }

      }
    )
  }

  private getData(otherProduct: Product) {
    if (otherProduct) {
      this.newProd.id = otherProduct.id;
      this.newProd.title = otherProduct.title;
      this.newProd.category = otherProduct.category.id;
      this.newProd.description = otherProduct.description;
      this.newProd.price = otherProduct.price;

    }

  }

  operation() {
    if (this.productRecive) {
      this.productService.editProduct(this.newProd).subscribe(x => {
        this.ngZone.run(async () => {
          (await this.toastCtrl.create({
            position: 'bottom',
            duration: 3000,
            message: 'Product has edited succesfully',
            color: 'success'
          })).present();
          this.nav.navigateRoot(['/products']);
        })

      },
        async error => (await this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Error editing product'
        })).present());
    } else {
      this.productService.addProduct(this.newProd).subscribe(
        async prod => {
          (await this.toastCtrl.create({
            position: 'bottom',
            duration: 3000,
            message: 'Product added succesfully',
            color: 'success'
          })).present();
          this.nav.navigateRoot(['/products']);
        },
        async error => (await this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Error adding product'
        })).present()
      );
    }

  }



  async takePhoto() {

    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.mainPhoto = photo.dataUrl;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.mainPhoto = photo.dataUrl;
  }

}
