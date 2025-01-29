import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TipsComponent } from './components/tips/tips.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomePageComponent,
    SkillsComponent,
    ProjectsComponent,
    ResourcesComponent,
    // TipsComponent,
    ContactComponent,
    TranslocoModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showButton = false;
  title = 'portfolio';
  constructor(private translocoService: TranslocoService) {}

  switchLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  
  scrollToTop() {
    
    const button = document.querySelector('.floating-btn') as HTMLElement;
    if (button) {
      button.classList.add('animate'); 
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });


    setTimeout(() => {
      this.showButton = false;
    }, 2000);
  }
}
