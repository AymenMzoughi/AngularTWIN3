import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Core/model/product';
import { ProductService } from 'src/app/Core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product:Product;

  constructor(private productService:ProductService,
  private route:Router) { }

  ngOnInit(): void {
    this.product=new Product()
  }
  saveProduct(){
    this.productService.listProduct.push(this.product);
    this.route.navigate(['products/list'])
  }
}
