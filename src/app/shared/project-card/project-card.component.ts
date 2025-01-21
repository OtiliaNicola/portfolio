import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
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
