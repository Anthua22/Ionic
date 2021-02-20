import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  password = '';
  passwordconfirm = '';
  constructor(private userService: UserService, public modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async changPassword() {
    if (this.password !== this.passwordconfirm) {
      (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: "The passwords doesn't match"
      })).present()
      return;
    }
    this.userService.updatePassword(this.password).subscribe(x => {
      this.modalCtrl.dismiss(true)
      
    },
      async error => (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error editing password'
      })).present());

  }

  cancel(){
    this.modalCtrl.dismiss(false);
  }
}
