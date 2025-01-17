import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroCardComponent } from '../../shared/hero-card/hero-card.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isNavOpen = false;
  downloadResume(): void {
    const resumePath = 'assets/SaurabhNaleResume.pdf';

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  @HostListener('document:touchstart', ['$event'])
  closeNavOnClickOutside(event: TouchEvent) {
    this.closeNav()
  }

  closeNav() {
    this.isNavOpen = false;
  }
}
