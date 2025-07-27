import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/server/cart.service';
import { jwtDecode } from '../../../../../node_modules/jwt-decode';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getAllCart();
  }

  getAllCart() {
    const id = Number(localStorage.getItem('userId'));
    this.cartService.getAllMyCarts(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
