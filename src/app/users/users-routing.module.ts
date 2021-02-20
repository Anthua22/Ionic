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
    path:'edit',
    loadChildren:()=>import('./useredit/useredit.module').then(m=>m.UsereditPageModule)
  },
  {
    path:':id',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfilePageModule),
    resolve: {
      user: ResolverService
    }
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
