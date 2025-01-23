import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title = input<string>();
  isNavOpen = false;

  constructor(private readonly translocoService: TranslocoService) {
    console.log(translocoService.getTranslation('en'));
    console.log(translocoService.translate('NAV.SKILLS'));
    
    
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  async downloadCv() {
    const link = document.createElement('a');
    link.href = 'assets/OtiliaNicolaResume.pdf';
    link.download = 'OtiliaNicolaResume.pdf';
    link.click();
  }
}
