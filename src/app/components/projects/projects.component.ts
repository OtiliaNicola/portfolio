import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';


interface Project {
  title: string;
  badgeColors: string[];
  tools: string[];
  myRole: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Projects</span>
          <div class="line"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="projects-grid">
            @for (project of projects; track project.title) {
              <app-project-card
                [title]="project.title"
                [badgeColors]="project.badgeColors"
                [tools]="project.tools"
                [myRole]="project.myRole"
                [description]="project.description"
                [githubUrl]="project.githubUrl"
                [demoUrl]="project.demoUrl">
              </app-project-card>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      badgeColors: ['#ec4899', '#16f2b3'],
      tools: ['Angular', 'TypeScript', 'Bootstrap', 'SCSS'],
      myRole: 'Frontend Developer',
      description: 'Personal portfolio website showcasing my projects and skills. Built with Angular and modern web technologies.',
      githubUrl: 'https://github.com/otilianicola/portfolio',
      demoUrl: 'https://otilianicola.github.io/portfolio'
    },
    // Añade aquí tus otros proyectos
  ];
}