import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController, NavController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { User } from 'src/app/users/interfaces/user.interface';
const { Camera } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user :User = {
    name: '',
    password: '',
    email: '',
    photo: '',
    lat:0,
    lng:0
  };
  password2 = '';

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private nav: NavController
  ) { }

  async ngOnInit() {
    try{
      const coordinates = await Geolocation.getCurrentPosition();
      this.user.lat = coordinates.coords.latitude;
      this.user.lng = coordinates.coords.longitude;
    }catch(Error){
      (await this.toast.create({
        duration: 3000,
        position: 'bottom',
        message: 'You need allow permission of location for register'
      })).present();
    }
    
    
  }

  register() {
    this.authService.register(this.user).subscribe(
      async () => {
        (await this.toast.create({
          duration: 3000,
          position: 'bottom',
          message: 'User registered!'
        })).present();
        this.nav.navigateRoot(['/auth/login']);
      }
    );
  }

  async takePhoto() {;
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
