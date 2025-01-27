import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [ CommonModule,TranslocoModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss'
})
export class TipsComponent {
  learningResources = [
    {
      title: 'HTML Practice',
      description: 'Mejora tus habilidades de HTML con ejercicios interactivos y desafíos prácticos.',
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      category: 'html',
      icon: 'fab fa-html5',
      badgeColor: 'danger'
    },
    {
      title: 'CSS Playground',
      description: 'Practica CSS y SCSS con ejercicios visuales y proyectos interactivos.',
      url: 'https://flexboxfroggy.com/',
      category: 'css',
      icon: 'fab fa-css3-alt',
      badgeColor: 'info'
    },
    {
      title: 'TypeScript Challenges',
      description: 'Mejora tu TypeScript con ejercicios prácticos y desafíos de programación.',
      url: 'https://www.typescriptlang.org/play',
      category: 'typescript',
      icon: 'fab fa-js',
      badgeColor: 'primary'
    },
    {
      title: 'Java Exercises',
      description: 'Practica Java con ejercicios interactivos y problemas de programación.',
      url: 'https://codegym.cc/',
      category: 'JavaScript',
      icon: 'fab fa-java',
      badgeColor: 'warning'
    },
    {
      title: 'Git Learning Game',
      description: 'Aprende Git de forma interactiva con este juego educativo.',
      url: 'https://learngitbranching.js.org/',
      category: 'git',
      icon: 'fab fa-git-alt',
      badgeColor: 'dark'
    },
    {
      title: 'Git Learning Game',
      description: 'Aprende Git de forma interactiva con este juego educativo.',
      url: 'https://ohmygit.org/?ref=dailydev',
      category: 'git',
      icon: 'fab fa-git-alt',
      badgeColor: 'dark'
    },
    {
      title: 'Git Learning Game',
      description: 'Aprende Git de forma interactiva con este juego educativo.',
      url: 'https://learngitbranching.js.org/',
      category: 'git',
      icon: 'fab fa-git-alt',
      badgeColor: 'dark'
    },
    {
      title: 'Git Learning Game',
      description: 'Aprende Git de forma interactiva con este juego educativo.',
      url: 'https://ohmygit.org/?ref=dailydev',
      category: 'git',
      icon: 'fab fa-git-alt',
      badgeColor: 'dark'
    }
  ];
}

