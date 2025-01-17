import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() topPosition: number = 0;
  @Input() title: string = '';
  @Input() badgeColors: string[] = [];
  @Input() tools: string[] = [];
  @Input() myRole: string = '';
  @Input() description: string = '';
}
