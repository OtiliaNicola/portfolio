import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import JSConfetti from 'js-confetti';

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
  private jsConfetti: JSConfetti;

  constructor(private readonly translocoService: TranslocoService) {
    console.log(translocoService.getTranslation('en'));
    console.log(translocoService.translate('NAV.SKILLS'));
    
    
    this.jsConfetti = new JSConfetti();
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  async downloadCv() {
    try {
      const link = document.createElement('a');
      link.href = 'assets/OtiliaNicolaResume.pdf';
      link.download = 'OtiliaNicolaResume.pdf';
      // Add your resume download logic here
      link.click();
      await this.jsConfetti.addConfetti({});
    } catch (error) {
      console.error('Error triggering confetti:', error);
    }
  }
}
