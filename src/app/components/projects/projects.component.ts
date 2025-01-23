import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../core/interfaces/project.interface';
import Atropos from 'atropos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      title: ' Calculator',
      description:
        'This GitHub repository contains a calculator made with HTML, CSS and JavaScript.',
      badgeColors: ['#FFA500', '#FFD700'],
      tools: ['JavaScript', 'HTML', 'SCSS'],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/calculator',
      demoUrl: 'https://otilianicola.github.io/calculator/',
    },
    {
      title: 'TaskNest',
      description:
        'TaskNest is a task management web application developed with Angular.',
      badgeColors: ['#61DAFB', '#282C34'],
      tools: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'TypeScript',
        'Bootstrap',
      ],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/task-nest',
      demoUrl: 'https://task-nest-three.vercel.app',
    },
    {
      title: 'Angular Gifs App',
      description: 'Gifs application from my Angular course',
      badgeColors: ['#00DC82', '#41B883'],
      tools: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/angular-gif-app',
      demoUrl: 'https://myfirst-angular-gif.netlify.app',
    },
  ];

  ngAfterViewInit() {
    Atropos({
      el: '.myAtropos_0',
      activeOffset: 40,
      shadowScale: 1.05,
    });
    Atropos({
      el: '.myAtropos_1',
      activeOffset: 40,
      shadowScale: 1.05,
    });
    Atropos({
      el: '.myAtropos_2',
      activeOffset: 40,
      shadowScale: 1.05,
    });
  }
}
