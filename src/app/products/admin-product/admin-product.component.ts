import { Product } from './../../Core/model/product';
import { ProductService } from './../../Core/services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public list : Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.list=this.productService.
    listProduct.
    filter(p => p.quantity==0);
  }
  suppProduct(product: Product): void{
    let i= this.list.indexOf(product);
    let index =this.productService.listProduct.indexOf(product);
      this.list.splice(i,1)
      this.productService.listProduct.splice(index,1)
    }
}