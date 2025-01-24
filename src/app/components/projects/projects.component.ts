import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../core/interfaces/project.interface';
import Atropos from 'atropos';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, TranslocoModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  constructor(private readonly translocoService: TranslocoService) {}

  ngOnInit() {
    this.translocoService.setActiveLang('en');
  }

  projects: Project[] = [
    {
      title: 'PROJECTS.CALCULATOR',
      description:
        'PROJECTS.DESC_CALCULATOR',
      badgeColors: ['#FFA500', '#FFD700'],
      tools: ['JavaScript', 'HTML', 'SCSS'],
      githubUrl: 'https://github.com/OtiliaNicola/calculator',
      demoUrl: 'https://otilianicola.github.io/calculator/',
    },
    {
      title: 'PROJECTS.TASKNEST',
      description:
        'PROJECTS.DESC_TASKNEST',
      badgeColors: ['#61DAFB', '#282C34'],
      tools: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'TypeScript',
        'Bootstrap',
      ],
      githubUrl: 'https://github.com/OtiliaNicola/task-nest',
      demoUrl: 'https://task-nest-three.vercel.app',
    },
    {
      title: 'PROJECTS.GIFS_ANGULAR',
      description: 'PROJECTS.DESC_GIFS_ANGULAR',
      badgeColors: ['#00DC82', '#41B883'],
      tools: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
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
