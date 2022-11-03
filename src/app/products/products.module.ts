import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product/form-product.component';
import { ProfileComponent } from '../users/profile/profile.component';
import { FormUserComponent } from '../users/form-user/form-user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    FormProductComponent,
    ProfileComponent,
    FormUserComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
