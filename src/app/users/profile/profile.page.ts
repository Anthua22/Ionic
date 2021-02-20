import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      x=>this.user = x.user
    );

  }

}
