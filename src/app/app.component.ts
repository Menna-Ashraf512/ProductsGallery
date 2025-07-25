import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [],
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
