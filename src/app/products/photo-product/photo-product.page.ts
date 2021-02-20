import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { ToastController } from "@ionic/angular";
import { Photo } from "../interfaces/photo";
import { Product } from "../interfaces/product.interface";
import { ProductService } from "../services/product.service";
const { Camera } = Plugins;
const { Geolocation } = Plugins;
@Component({
  selector: "app-photo-product",
  templateUrl: "./photo-product.page.html",
  styleUrls: ["./photo-product.page.scss"],
})
export class PhotoProductPage implements OnInit {
  photo = "";
  photoFile = "";
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private toastCtrl:ToastController,
    private productsService: ProductService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.product = data.product;
      },

      (err) => {
        console.log(err);
      }
    );
  }
  borrarPhoto(photo: Photo) {
    console.log(photo);
    this.productsService.deletePhoto(photo, this.product.id!).subscribe((x) => {
      this.product.photos = this.product.photos?.filter((x) => x != photo);
    },async error => (await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: 'Error change main photo'
    })).present());
  }

  updateMainPhoto(photo: Photo) {
    console.log(photo);
    this.productsService.updateMainPhoto(this.product.id!, photo.id).subscribe(
      async(x) => {
        this.product.mainPhoto = x.mainPhoto;
        (await this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Main photo changed successfully'
        })).present()
      },
      async error => (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error change main photo'
      })).present());
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.photo = photo.dataUrl;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.photo = photo.dataUrl;
  }

  addPhoto() {
    if (this.photo !== "") {
      this.productsService
        .addPhotoProduct(this.photo, this.product.id!)
        .subscribe(
          (x) => {
            this.product.photos!.push(x);
            this.photo = "";
            this.photoFile = "";
          },
          (err) => console.error(err)
        );
    }
  }
}
