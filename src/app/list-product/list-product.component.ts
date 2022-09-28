import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public title: String;
  public list: Product[];
  constructor() { 
    this.title= 'My App Store';
    this.list=[
      { id:12,
        title: 'T-shirt 1',
        price: 28,
        nbrLike: 40,
        description: 'nice T-shirt',
        category: 'Women',
        quantity: 3,
        picture: "https://s3.us-east-2.amazonaws.com/travelfashiongirlpostphotos/2017/Best+T-Shirts+for+Women/best-t-shirts-for-women-25.2.jpg"
      },
      {
        id:13,
        title: 'T-shirt 2',
        price: 8,
        nbrLike: 60,
        description: 'nice T-shirt 2',
        category: 'Man',
        quantity: 0,
        picture: "https://media.boohoo.com/i/boohoo/mzz03772_black_xl_3/masculin-noir-t-shirt---man-official"
      }
    ]

  }

  ngOnInit(): void {
  }
  incrementLike(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
    }
  }

  buyProduct(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
    }
  }
}
