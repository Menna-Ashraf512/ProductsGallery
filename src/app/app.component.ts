import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from "./Features/layout/navbar/navbar.component";
import { FooterComponent } from "./Features/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductsGallery';
  constructor(private toastrService:ToastrService){}
  Toaster(){
    console.log('toaster is working')
    this.toastrService.success('okay','Done')
  }
}
