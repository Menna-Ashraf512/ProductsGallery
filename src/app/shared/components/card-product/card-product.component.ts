import { Component, Input } from '@angular/core';
import { ProductService } from '../../../core/server/product.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../../core/interfaces/iproduct';
import { SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  
  @Input() product!: IProduct;
  
}
