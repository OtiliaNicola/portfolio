import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';


interface Project {
  title: string;
  description: string;
  badgeColors: string[];
  tools: string[];
  myRole: string;
  githubUrl: string;
  demoUrl: string;
  topPosition?: string; // Añadido como opcional
}

interface Education {
  title: string;
  institution: string;
  period: string;
  details?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio',
      description: 'Portafolio personal desarrollado con Angular 19, donde muestro mis proyectos y habilidades como desarrolladora Frontend.',
      badgeColors: ['#00DC82', '#41B883'],
      tools: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/portfolio',
      demoUrl: ''
    },
    {
      title: 'IOS Calculator',
      description: 'Calculadora inspirada en iOS, desarrollada con JavaScript vanilla, HTML y CSS.',
      badgeColors: ['#FFA500', '#FFD700'],
      tools: ['JavaScript', 'HTML', 'CSS'],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/ios_calculator',
      demoUrl: 'https://ios-calculator-gamma.vercel.app/'
    },
    {
      title: 'Space Tourism',
      description: 'Proyecto Frontend Mentor de turismo espacial, desarrollado con React.',
      badgeColors: ['#61DAFB', '#282C34'],
      tools: ['React', 'JavaScript', 'CSS'],
      myRole: 'Frontend Developer',
      githubUrl: 'https://github.com/OtiliaNicola/space-tourism',
      demoUrl: 'https://space-tourism-sepia-mu.vercel.app/'
    }
  ];

  education: Education[] = [
    {
      title: 'Curso Fullstack Development Bootcamp',
      institution: 'Adalab',
      period: 'Marzo - Junio 2024',
      details: [
        'Desarrollo de aplicaciones web responsive usando HTML, CSS, JavaScript y React.',
        'Backend con Node.js, Express y MySQL.',
        'Control de versiones con Git.',
        'Proyectos colaborativos utilizando filosofía Agile y Scrum.'
      ]
    },
    {
      title: 'Curso Angular de Cero a Experto',
      institution: 'Udemy',
      period: 'Agosto 2024',
      details: [
        'Fundamentos y arquitecturas de Angular',
        'Creación de componentes y servicios',
        'Manejo de formularios y directivas'
      ]
    },
    {
      title: 'FP Superior de Administración y Finanzas',
      institution: 'Centro Cultural Salmantino',
      period: 'Madrid (2021 - 2023)'
    }
  ];
}