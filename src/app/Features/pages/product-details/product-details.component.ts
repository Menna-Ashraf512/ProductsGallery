import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/server/product.service';
import { IProduct } from '../../../core/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private toastrService:ToastrService
  ) {}

  detailsProduct:IProduct| null =null

  ngOnInit(): void {
      this.getId()
  }

  getId() {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        let idProduct = p.get('id');
        this.productService.getProductById(idProduct).subscribe({
          next: (res) => {
            this.detailsProduct = res;
            console.log(this.detailsProduct)
          },
          error: (err) => {
            console.log(err);
            this.toastrService.error('Sorry',err.message)
          },
        });
      },
    });
  }
}
