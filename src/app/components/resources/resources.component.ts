import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  title: string;
  description: string;
  link: string;
  icon: string;
  type: 'free' | 'paid' | 'mixed';
  category: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Learning Resources</span>
          <div class="line"></div>
          <p class="section-description">
            A curated collection of resources that helped me in my development journey
          </p>
        </div>
      </div>

      @for (category of getCategories(); track category) {
        <div class="resource-section">
          <h3 class="category-title">{{ category }}</h3>
          <div class="resources-grid">
            @for (resource of getResourcesByCategory(category); track resource.title) {
              <div class="resource-card" [class]="resource.type">
                <div class="resource-icon">
                  <i [class]="resource.icon"></i>
                </div>
                <div class="resource-content">
                  <h4>{{ resource.title }}</h4>
                  <p>{{ resource.description }}</p>
                  <div class="resource-footer">
                    <span class="resource-type">{{ resource.type }}</span>
                    <a [href]="resource.link" target="_blank" rel="noopener noreferrer">
                      Visit Resource
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  resources: Resource[] = [
    {
      title: 'freeCodeCamp',
      description: 'Learn to code with free interactive exercises and projects.',
      link: 'https://www.freecodecamp.org',
      icon: 'fas fa-laptop-code',
      type: 'free',
      category: 'Learning Platforms'
    },
    {
      title: 'Udemy',
      description: 'Online courses in web development and programming.',
      link: 'https://www.udemy.com',
      icon: 'fas fa-graduation-cap',
      type: 'paid',
      category: 'Learning Platforms'
    },
    {
      title: 'Frontend Mentor',
      description: 'Real-world frontend challenges and projects.',
      link: 'https://www.frontendmentor.io',
      icon: 'fas fa-code',
      type: 'mixed',
      category: 'Practice'
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for web technologies.',
      link: 'https://developer.mozilla.org',
      icon: 'fas fa-book',
      type: 'free',
      category: 'Documentation'
    },
    {
      title: 'GitHub',
      description: 'Version control and code collaboration platform.',
      link: 'https://github.com',
      icon: 'fab fa-github',
      type: 'free',
      category: 'Tools'
    },
    {
      title: 'VS Code',
      description: 'Powerful code editor with great extensions.',
      link: 'https://code.visualstudio.com',
      icon: 'fas fa-code',
      type: 'free',
      category: 'Tools'
    }
  ];

  getCategories(): string[] {
    return [...new Set(this.resources.map(resource => resource.category))];
  }

  getResourcesByCategory(category: string): Resource[] {
    return this.resources.filter(resource => resource.category === category);
  }
}