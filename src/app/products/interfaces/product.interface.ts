import { User } from 'src/app/users/interfaces/user.interface';
import { Category } from './category';
import { Photo } from './photo';


interface ProductBase {
  id?: number;
  title: string;
  description: string;
  price: number;
  mainPhoto: string;
  owner?: User;
  numVisits?: number;
  category: number | Category;
  mine?: boolean;
  photos?: Photo[];
  datePublished?: string;
  distance?: number;
  status?:number;
  bookmarked?:boolean
  

}

export interface Product extends ProductBase {
  category: Category;
}

export interface ProductAdd extends ProductBase {
  category: number;
}
