import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ProductService } from './services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductresolverService implements Resolve<Product> {

  constructor(private productsService:ProductService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    let urledit: UrlSegment = route.url[route.url.length - 2];

    return this.productsService.getProduct(route.params.id).pipe(map(x => {
      if (urledit && urledit.path === 'edit' && !x.mine) {
        this.router.navigate(['/products/add']);

      }
      return x;
    }), catchError(error => {

      this.router.navigate(['/products/add']);
      return NEVER;
    }))
  }
}
