import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductAdd } from '../interfaces/product.interface';
import { Comment } from '../interfaces/comment.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../interfaces/responses/product-response';
import { PhotoProductResponse } from '../interfaces/responses/photo-response';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly BASE_URL = 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.BASE_URL)
      .pipe(
        map(resp => resp.products)
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<{ product: Product }>(`${this.BASE_URL}/${id}`)
      .pipe(
        map(resp => resp.product)
      );
  }

  changeRating(id: number, rating: number): Observable<number> {
    return this.http.put<{ rating: number }>(`${this.BASE_URL}/${id}/rating`, { rating })
      .pipe(map(resp => resp.rating));
  }

  addProduct(prod: ProductAdd): Observable<Product> {
    return this.http.post<{ product: Product }>(this.BASE_URL, prod)
      .pipe(
        map(resp => resp.product)
      );
  }


  editProduct(product: ProductAdd): Observable<Product> {
    return this.http.put<ProductResponse>(`${this.BASE_URL}/${product.id}`, {
      title: product.title,
      description: product.description,
      price: product.price,
      category: +product.category
    }).pipe(
      map(z => z.product)
    );

  }
  deleteProduct(idProd): Observable<void> {
    return this.http.delete(`${this.BASE_URL}/${idProd}`).pipe(map(() => null));
  }

  addPhotoProduct(photo: string, id: number): Observable<Photo> {
    return this.http.post<PhotoProductResponse>(`products/${id}/photos`, { photo }).pipe(
      map(x => x.photo)
    );
  }

  deletePhoto(photo: Photo, idProduct: number): Observable<void> {
    return this.http.delete<void>(`products/${idProduct}/photos/${photo.id}`)
  }

  updateMainPhoto(idProduct: number, idPhoto: number): Observable<Product> {
    return this.http.put<ProductResponse>(`products/${idProduct}`, { mainPhoto: idPhoto }).pipe(
      map(x => x.product)
    );
  }


  /*addComment(idProd: number, comment: string): Observable<Comment> {
    return this.http.post<{ comment: Comment }>(`${this.BASE_URL}/${idProd}/rating`, { text: comment }).pipe(
      map(resp => {
        resp.comment.user.photo = environment.baseUrl + '/' + resp.comment.user.photo;
        return resp.comment;
      })
    );
  }

  getComments(idProd): Observable<Comment[]> {
    return this.http.get<{ comments: Comment[] }>(`${this.BASE_URL}/${idProd}/comments`).pipe(
      map(resp => resp.comments.map(c => {
        c.user.photo = environment.baseUrl + '/' + c.user.photo;
        return c;
      }))
    );
  }*/
}
