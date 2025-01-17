import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card" [style.top]="topPosition">
      <div class="project-content">
        <h3 class="project-title">{{title}}</h3>
        
        <div class="project-badges">
          @for (color of badgeColors; track color) {
            <span class="badge" [style.background-color]="color"></span>
          }
        </div>

        <div class="project-tools">
          @for (tool of tools; track tool) {
            <span class="tool-tag">{{tool}}</span>
          }
        </div>

        @if (myRole) {
          <div class="project-role">
            <h4>My Role:</h4>
            <p>{{myRole}}</p>
          </div>
        }

        <p class="project-description">{{description}}</p>

        <div class="project-links">
          @if (githubUrl) {
            <a [href]="githubUrl" target="_blank" rel="noopener noreferrer" class="github-link">
              <img src="assets/images/icon/github.svg" alt="GitHub">
              View Code
            </a>
          }
          @if (demoUrl) {
            <a [href]="demoUrl" target="_blank" rel="noopener noreferrer" class="demo-link">
              <img src="assets/images/icon/external-link.svg" alt="Demo">
              Live Demo
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() topPosition = '0';
  @Input() title = '';
  @Input() badgeColors: string[] = [];
  @Input() tools: string[] = [];
  @Input() myRole = '';
  @Input() description = '';
  @Input() githubUrl = '';
  @Input() demoUrl = '';
}
