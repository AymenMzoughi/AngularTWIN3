import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes=[
  {path: '', component:HomeComponent},
  {path: 'index',redirectTo:'home', pathMatch:'full'},
  {path: 'product', component: ListProductComponent},
  {path: 'user',component: ListUserComponent},
  {path: 'home',component: HomeComponent},
  {path: 'contact',component: ContactComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
