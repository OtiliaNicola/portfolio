import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Experience</span>
          <div class="line"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="experience-timeline">
            @for (exp of experiences; track exp.role) {
              <div class="experience-item">
                <div class="experience-content">
                  <h3>{{exp.role}}</h3>
                  <h4>{{exp.company}}</h4>
                  <p class="period">{{exp.period}}</p>
                  @for (desc of exp.description; track desc) {
                    <p>{{desc}}</p>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./experience.component.css']
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      role: 'Freelance Developer',
      company: 'StartUp',
      period: 'Madrid (Junio 2024 - actualmente)',
      description: [
        'Desarrollo con Angular e Ionic, asumiendo pequeñas tareas de desarrollo, depuración, pruebas, maquetación.'
      ]
    },
    {
      role: 'Tramitadora de siniestros',
      company: 'Howden Iberia',
      period: 'Madrid (Sept.2023 - Marzo 2024)',
      description: [
        'Gestión de correo electrónico y llamadas telefónicas',
        'Gestionando siniestros relacionados con federaciones deportivas.'
      ]
    },
    {
      role: 'Encargada de sala',
      company: 'Golden Park S.L.',
      period: 'Madrid (2015-2020)',
      description: [
        'Gestión de apuestas y máquinas tragaperras',
        'Apertura y cierre de caja, recaudaciones quincenales',
        'Realización de horarios, formación de personal entre otros.'
      ]
    }
  ];
}