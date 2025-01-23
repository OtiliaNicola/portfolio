import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TipsComponent } from './components/tips/tips.component';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomePageComponent,
    SkillsComponent,
    ProjectsComponent,
    ResourcesComponent,
    TipsComponent,
    ContactComponent,
    TranslocoDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translocoService: TranslocoService) {}

  switchLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
