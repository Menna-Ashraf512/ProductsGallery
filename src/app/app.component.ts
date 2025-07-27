import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { NavbarComponent } from "./Features/layout/navbar/navbar.component";
import { FooterComponent } from "./Features/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductsGallery';
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('key', 'value');

      if (typeof initFlowbite === 'function') {
        setTimeout(() => initFlowbite(), 0);
      }
    }
  }
}
