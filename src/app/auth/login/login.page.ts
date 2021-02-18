import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import {
  Plugins,
  PushNotificationToken
} from '@capacitor/core';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  firebaseToken = null;

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        this.firebaseToken = token.value;
        console.log(token);
      }
    );
  }

  async loginGoogle() {
    try {
      let user = await Plugins.GoogleAuth.signIn();
  
      this.authService.loginGoogle(user.authentication.idToken).subscribe(
        ()=> this.router.navigate(['/products']),
        async err=>{
          (await this.alertCtrl.create({
            header: 'Login error',
            message: err,
            buttons: ['Ok']
          })).present();
        }
      )
      
    } catch (err) {
      (await this.alertCtrl.create({
        header: 'Login error',
        message: err,
        buttons: ['Ok']
      })).present();
    }
  }



  login() {
    this.authService.login(this.email, this.password, this.firebaseToken).subscribe(
      () => this.router.navigate(['/products']),
      async error => {
        (await this.alertCtrl.create({
          header: 'Login error',
          message: 'Incorrect email and/or password',
          buttons: ['Ok']
        })).present();
      }
    );
  }

}
