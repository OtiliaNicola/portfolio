import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: string;
  image?: string;
  academy?: string;
  category: 'Learning Platforms' | 'Practice' | 'Documentation' | 'Tools';
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  learningPlatforms: Resource[] = [
    {
      title: 'Web programming bootcamp',
      description: 'Online courses in web development and programming.',
      link: 'https://adalab.es/',
      icon: 'assets/images/laptop-code-solid.svg',
      academy: 'Adalab',
      category: 'Learning Platforms'
    },
    {
      title: 'Angular from 0 to expert',
      description: 'Angular fundamentals and architectures.',
      link: 'https://www.udemy.com/course/angular-fernando-herrera/',
      icon: 'assets/images/laptop-code-solid.svg',
      academy: 'Udemy',
      category: 'Learning Platforms'
    }
  ];

  practiceResources: Resource[] = [
    {
      title: 'Cofana Labs',
      description: 'Real-world frontend challenges and projects.',
      link: 'https://www.linkedin.com/company/cofana-labs/',
      image: 'assets/images/cofanalabs.png',
      category: 'Practice'
    }
  ];

  documentation: Resource[] = [
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for web technologies.',
      link: 'https://developer.mozilla.org',
      icon: 'fas fa-book',
      category: 'Documentation'
    }
  ];

  tools: Resource[] = [
    {
      title: 'GitHub',
      description: 'Version control and code collaboration platform.',
      link: 'https://github.com',
      icon: 'fab fa-github',
      category: 'Tools'
    }
  ];
}