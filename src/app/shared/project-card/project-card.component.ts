import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  title = input<string>();
  badgeColors = input.required<string[]>();
  tools = input.required<string[]>();
  description = input.required<string>();
  githubUrl = input<string>();
  demoUrl = input<string>();
}
