import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    
],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @Input() coderName: string = '';
  @Input() title: string = '';
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/OtiliaNicolaResume.pdf';
    link.download = 'OtiliaNicolaResume.pdf';
    link.click();
  }
}
