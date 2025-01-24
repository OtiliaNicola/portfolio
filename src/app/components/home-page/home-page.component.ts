import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AvailableLangs, LangDefinition, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import JSConfetti from 'js-confetti';
import { TranslocoHttpLoader } from '../../transloco-loader';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [TranslocoHttpLoader],
})
export class HomePageComponent {
  title = input<string>();
  isNavOpen = false;
  private jsConfetti: JSConfetti;
  availableLangs!: AvailableLangs;
  selectedLang!: string;

  constructor(private readonly translocoService: TranslocoService) {
    this.availableLangs = translocoService.getAvailableLangs();
    this.selectedLang = translocoService.getActiveLang();
    
    this.jsConfetti = new JSConfetti();
  }

  changeLang(lang: string | LangDefinition) {
    this.translocoService.setActiveLang(lang as string);
    this.selectedLang = this.translocoService.getActiveLang();
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
