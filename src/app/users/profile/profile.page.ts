import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/products/services/product.service';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;


  constructor(private route:ActivatedRoute, public modalCtrl:ModalController,
    private userService:UserService, public toast:ToastController) { }

  ngOnInit() {
    this.route.data.subscribe(
      x=>this.user = x.user
    );

  }

  async openChangePassword(){
    /*const modal = await this.modalCtrl.create({
     
    })*/
  }

}
