import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, ToastController } from '@ionic/angular';

import { ChangePasswordPage } from '../change-password/change-password.page';
import { ChangePhotoPage } from '../change-photo/change-photo.page';
import { EditinfoPage } from '../editinfo/editinfo.page';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;


  constructor(private route: ActivatedRoute, public modalCtrl: ModalController,
    private userService: UserService, public toast: ToastController,
    private nav: NavController) { }

  ngOnInit() {
    this.route.data.subscribe(
      x => this.user = x.user
    );

  }

  async openChangePass() {
    const modal = await this.modalCtrl.create({
      component: ChangePasswordPage,
      componentProps: { user: this.user }
    });
    await modal.present();
    const result = await modal.onDidDismiss();

    if (result.data == true) {
      (await this.toast.create({
        position: 'bottom',
        duration: 3000,
        message: 'Password Changed Successfully'
      })).present();
    }
  }

  async openChangeInfo() {
    const modal = await this.modalCtrl.create({
      component: EditinfoPage,
      componentProps: { user: this.user }
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data == true) {
      (await this.toast.create({
        position: 'bottom',
        duration: 3000,
        message: 'Profile info changed Successfully'
      })).present();
    }
  }

  async openChangeAvatar() {
    const modal = await this.modalCtrl.create({
      component: ChangePhotoPage,
      componentProps: { user: this.user }
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data == true) {
      (await this.toast.create({
        position: 'bottom',
        duration: 3000,
        message: 'Profile avatar changed Successfully'
      })).present();
    }
  }



}
