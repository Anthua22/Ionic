import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage implements OnInit {
  @Input() user:User;
  constructor(private userService: UserService, public modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  cancel(){
    this.modalCtrl.dismiss(false);
  }

  async changeInfo(){
    this.userService.updateProfile(this.user.name, this.user.email).subscribe(x=>{
      this.modalCtrl.dismiss(true)},
      async error => (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error editing info profile'
      })).present()
    )
  }

}
