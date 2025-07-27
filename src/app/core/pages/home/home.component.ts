import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../server/product.service';
import { IProduct } from '../../interfaces/iproduct';
import { CardProductComponent } from "../../../shared/components/card-product/card-product.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardProductComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products:IProduct[]=[]

  constructor(private productService:ProductService){}
  
  ngOnInit(): void {
    this.getAllProduct();
  }
  
  //display product
  getAllProduct() {
    this.productService.allProduct().subscribe({
      next: (res) => {
        this.products = res.slice(0, 4);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('done');
      },
    });
  }
}
