import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  title: string;
  institution: string;
  period: string;
  details?: string[];
}

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Education</span>
          <div class="line"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="education-timeline">
            @for (edu of education; track edu.title) {
              <div class="education-item">
                <div class="education-content">
                  <h3>{{edu.title}}</h3>
                  <h4>{{edu.institution}}</h4>
                  <p class="period">{{edu.period}}</p>
                  @if (edu.details) {
                    @for (detail of edu.details; track detail) {
                      <p>{{detail}}</p>
                    }
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent {
  education: Education[] = [
    {
      title: 'Curso Fullstack Development Bootcamp',
      institution: 'Adalab',
      period: 'Marzo - Junio 2024',
      details: [
        'Desarrollo de aplicaciones web responsive usando HTML, CSS, JavaScript y React.',
        'Backend con Node.js, Express y MySQL.',
        'Control de versiones con Git.',
        'Proyectos colaborativos utilizando filosofía Agile y Scrum.'
      ]
    },
    {
      title: 'Curso Angular de Cero a Experto',
      institution: 'Udemy',
      period: 'Agosto 2024',
      details: [
        'Fundamentos y arquitecturas de Angular',
        'Creación de componentes y servicios',
        'Manejo de formularios y directivas'
      ]
    },
    {
      title: 'FP Superior de Administración y Finanzas',
      institution: 'Centro Cultural Salmantino',
      period: 'Madrid (2021 - 2023)'
    },
    {
      title: 'Prueba de Acceso a Grado Superior',
      institution: 'Madrid',
      period: '2020 - 2021'
    },
    {
      title: 'Educación Secundaria Obligatoria',
      institution: 'I.E.S Carpe Diem',
      period: 'Chinchón, Madrid (2006 - 2011)'
    }
  ];
}