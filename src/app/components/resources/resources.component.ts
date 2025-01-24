import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

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
  imports: [CommonModule, TranslocoModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  constructor(private readonly translocoService: TranslocoService) {}
  
    ngOnInit() {
      this.translocoService.setActiveLang('en');
    }
  learningPlatforms: Resource[] = [
    {
      title: 'LEARNING_PATH.BOOTCAMP_TITLE',
      description: 'LEARNING_PATH.BOOTCAMP_DESC',
      link: 'https://adalab.es/',
      icon: 'assets/images/laptop-code-solid.svg',
      academy: 'Adalab',
      category: 'Learning Platforms'
    },
    {
      title: 'LEARNING_PATH.ANGULAR_TITLE',
      description: 'LEARNING_PATH.ANGULAR_DESC',
      link: 'https://www.udemy.com/course/angular-fernando-herrera/',
      icon: 'assets/images/laptop-code-solid.svg',
      academy: 'Udemy',
      category: 'Learning Platforms'
    }
  ];

  practiceResources: Resource[] = [
    {
      title: 'LEARNING_PATH.COMPANY',
      description: 'LEARNING_PATH.COMPANY_DESC',
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