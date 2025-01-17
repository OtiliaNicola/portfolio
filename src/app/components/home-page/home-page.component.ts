import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ExperiencesComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationsComponent } from "../educations/educations.component";
import { MyWorksComponent } from "../my-works/my-works.component";
import { ContactComponent } from "../contact/contact.component";
import { PracticeComponent } from "../practice/practice.component";
import { HeroCardComponent } from "../../shared/hero-card/hero-card.component";



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterOutlet,
    ExperiencesComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationsComponent,
    MyWorksComponent,
    ContactComponent,
    PracticeComponent,
    HeroCardComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  isNavOpen = false;
  skills = [
    'Angular', 'React', 'Ionic',
    'HTML5', 'CSS3', 'SCSS',
    'TypeScript', 'JavaScript',
    'Bootstrap', 'Node JS',
    'Express JS', 'SQL', 'Git'
  ];

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
