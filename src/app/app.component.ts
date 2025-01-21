import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HomePageComponent,
    SkillsComponent,
    ProjectsComponent,
    ResourcesComponent,
    ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
}
