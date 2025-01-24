import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoHttpLoader } from '../../transloco-loader';
import { AvailableLangs, TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [TranslocoHttpLoader],
})
export class SkillsComponent {
  availableLangs!: AvailableLangs;
    selectedLang!: string;

  
  skills = [
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'React', icon: 'react.svg' },
    { name: 'IonicFramework', icon: 'ionic.svg' },
    { name: 'Capacitor', icon: 'capacitorjs.svg' },
    { name: 'Bootstrap', icon: 'bootstrap.svg' },
    { name: 'PrimeNG', icon: 'primeng.svg' },
    { name: 'Tailwind', icon: 'tailwind.svg' },
    { name: 'NodeJS', icon: 'nodejs.svg' },
    { name: 'ExpressJS', icon: 'expressjs.svg' },
    { name: 'MySQL', icon: 'mysql.svg' },
    { name: 'Firebase', icon: 'fireba.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'Trello', icon: 'trello.svg' },
    { name: 'Postman', icon: 'getpostman.svg' },
  ];
}
