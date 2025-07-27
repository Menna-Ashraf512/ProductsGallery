import {
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { ProductService } from '../../../core/server/product.service';
import { CardProductComponent } from '../../../shared/components/card-product/card-product.component';
import { IProduct } from '../../../core/interfaces/iproduct';
import { SearchPipe } from '../../../core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CardProductComponent, SearchPipe, FormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, AfterViewChecked {
  constructor(private productService: ProductService) {}

  text: string = '';
  products: IProduct[] = [];
  secondArrayProducts: IProduct[] = [];

  ngOnInit(): void {
    this.getAllProduct();
  }

  ngAfterViewChecked(): void {
    if (typeof window !== 'undefined' && typeof initFlowbite === 'function') {
      setTimeout(() => initFlowbite(), 0);
    }
  }
  //display product
  getAllProduct() {
    this.productService.allProduct().subscribe({
      next: (res) => {
        this.secondArrayProducts = [...res];
        this.products = [...res];
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('done');
      },
    });
  }
  // sort
  sortByNameZToA() {
    this.products.sort((a, b) => b.title.localeCompare(a.title));
  }
  sortByNameAToZ() {
    this.products.sort((a, b) => a.title.localeCompare(b.title));
  }
  sortByPriceHighToLow() {
    this.products.sort((a, b) => b.price - a.price);
  }
  sortByPriceLowToHigh() {
    this.products.sort((a, b) => a.price - b.price);
  }
  resetSort() {
    this.products = [...this.secondArrayProducts];
  }
}
