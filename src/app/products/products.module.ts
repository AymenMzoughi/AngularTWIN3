import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminProductComponent } from "./admin-product/admin-product.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { FormProductComponent } from "./form-product/form-product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";



@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    FormProductComponent,
    DetailProductComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
