import { NotFoundComponent } from './Pages/home/not-found/not-found.component';
import { ContactComponent } from './Pages/home/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const ROUTES: Routes=[
  {path:'',component:HomeComponent},
  {path:'index',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m   => m.UsersModule) },
  {path:'**', component: NotFoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
