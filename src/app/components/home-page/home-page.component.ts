import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title = input<string>();
  isNavOpen = false;
  private jsConfetti: JSConfetti;

  constructor() {
    this.jsConfetti = new JSConfetti();
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
    try {
      // Add your resume download logic here
      await this.jsConfetti.addConfetti({
        emojis: ['🌟', '✨', '💫', '🎉'],
        emojiSize: 70,
        confettiNumber: 50,
      });
    } catch (error) {
      console.error('Error triggering confetti:', error);
    }
    link.click();
  }
}
