import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumericValueAccessor } from '@ionic/angular';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: 'me',
    loadChildren: ()=> import('./profile/profile.module').then( m => m.ProfilePageModule),
    resolve: {
      user: ResolverService
    }
  },
 
  {
    path:':id',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfilePageModule),
    resolve: {
      user: ResolverService
    }
    
  },  {
    path: 'editinfo',
    loadChildren: () => import('./editinfo/editinfo.module').then( m => m.EditinfoPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-photo',
    loadChildren: () => import('./change-photo/change-photo.module').then( m => m.ChangePhotoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
