import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;
const { Geolocation } = Plugins;
@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.page.html',
  styleUrls: ['./change-photo.page.scss'],
})
export class ChangePhotoPage implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService, public modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  cancel() {
    this.modalCtrl.dismiss(false);
  }

  async changeAvatar() {
    this.userService.updateAvatar(this.user.photo).subscribe(x=>{
      this.modalCtrl.dismiss(true)
    },
    async error => (await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: 'Error editing info profile'
    })).present())
  }

  async takePhoto() {
    ;
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.user.photo = photo.dataUrl;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.user.photo = photo.dataUrl;
  }
}
