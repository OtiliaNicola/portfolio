import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  template:'./components/home-page/home-page.component.html'
  
})
export class AppComponent {
  title = 'portfolio';
}
