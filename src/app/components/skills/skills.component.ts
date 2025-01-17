// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   imports: [],
//   templateUrl: './skills.component.html',
//   styleUrl: './skills.component.scss'
// })
// export class SkillsComponent {
//   skills = [
//     { name: 'AWS', image: 'assets/images/skills/aws.svg' },
//     { name: 'Bootstrap', image: 'assets/images/skills/bootstrap.svg' },
//     { name: 'CSS', image: 'assets/images/skills/css.svg' },
//     { name: 'Docker', image: 'assets/images/skills/docker.svg' },
//     { name: 'Figma', image: 'assets/images/skills/figma.svg' },
//     { name: 'Firebase', image: 'assets/images/skills/fireba.svg' },
//     { name: 'Git', image: 'assets/images/skills/git.svg' },
//     { name: 'Go', image: 'assets/images/skills/go.svg' },
//     { name: 'HTML', image: 'assets/images/skills/html.svg' },
//     { name: 'JavaScript', image: 'assets/images/skills/javascript.svg' },
//     { name: 'MaterialUi', image: 'assets/images/skills/materialui.svg' },
//     { name: 'MongoDB', image: 'assets/images/skills/mongoDB.svg' },
//     { name: 'MySQL', image: 'assets/images/skills/mysql.svg' },
//     { name: 'Angular', image: 'assets/images/skills/angular.png' },
//     { name: 'React', image: 'assets/images/skills/react.svg' },
//     { name: 'Strapi', image: 'assets/images/skills/strapi.svg' },
//     { name: 'Tailwind', image: 'assets/images/skills/tailwind.svg' },
//     { name: 'TypeScript', image: 'assets/images/skills/typescript.svg' }
//   ];

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Skills</span>
          <div class="line"></div>
        </div>
      </div>
      <div class="row">
        @for (category of skillCategories; track category.name) {
          <div class="col-12 mb-4">
            <h3 class="category-title">{{category.name}}</h3>
            <div class="skills-grid">
              @for (skill of category.skills; track skill.name) {
                <div class="skill-item">
                  <img [src]="'assets/images/skills/' + skill.icon" [alt]="skill.name">
                  <div class="skill-info">
                    <h4>{{skill.name}}</h4>
                    <div class="progress">
                      <div class="progress-bar" 
                           [style.width.%]="skill.level"
                           [attr.aria-valuenow]="skill.level"
                           aria-valuemin="0"
                           aria-valuemax="100">
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <div class="col-12 mt-4">
          <div class="additional-skills">
            <h3>Fortalezas</h3>
            <ul>
              <li>
                <strong>Proactividad:</strong> 
                Actitud dinámica y orientada al trabajo en equipo.
              </li>
              <li>
                <strong>Perseverancia:</strong>
                Comprometida y orientada a resultados.
              </li>
              <li>
                <strong>Creatividad:</strong>
                Capacidad para proponer soluciones innovadoras.
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 mt-4">
          <div class="languages">
            <h3>Idiomas</h3>
            <ul>
              <li><strong>Rumano:</strong> Nativo</li>
              <li><strong>Español:</strong> Nativo</li>
              <li><strong>Inglés:</strong> Nivel bajo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'angular.svg', level: 85 },
        { name: 'React', icon: 'react.svg', level: 80 },
        { name: 'Ionic', icon: 'ionic.svg', level: 75 },
        { name: 'HTML5', icon: 'html.svg', level: 90 },
        { name: 'CSS3', icon: 'css.svg', level: 85 },
        { name: 'TypeScript', icon: 'typescript.svg', level: 85 },
        { name: 'JavaScript', icon: 'javascript.svg', level: 80 },
        { name: 'Bootstrap', icon: 'bootstrap.svg', level: 85 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs.svg', level: 75 },
        { name: 'Express.js', icon: 'express.svg', level: 70 },
        { name: 'SQL', icon: 'sql.svg', level: 75 }
      ]
    },
    {
      name: 'Herramientas',
      skills: [
        { name: 'Git', icon: 'git.svg', level: 80 }
      ]
    }
  ];
}