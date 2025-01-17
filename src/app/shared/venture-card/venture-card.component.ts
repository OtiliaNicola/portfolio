import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventures-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ventures-card">
      <div class="card-image">
        <img [src]="imageUrl" [alt]="title">
        <div class="card-overlay">
          <div class="overlay-icons">
            @if (gitLink) {
              <a [href]="gitLink" target="_blank" rel="noopener noreferrer">
                <img src="assets/images/icon/github.svg" alt="GitHub">
              </a>
            }
            @if (browserLink) {
              <a [href]="browserLink" target="_blank" rel="noopener noreferrer">
                <img src="assets/images/icon/external-link.svg" alt="Visit">
              </a>
            }
          </div>
        </div>
      </div>

      <div class="card-content">
        <h3 class="card-title">{{title}}</h3>
        
        <div class="card-stats">
          <div class="stat">
            <img src="assets/images/icon/heart.svg" alt="Likes">
            <span>{{likes}}</span>
          </div>
          <div class="stat">
            <img src="assets/images/icon/comment.svg" alt="Comments">
            <span>{{comments}}</span>
          </div>
        </div>

        <p class="card-description">{{description}}</p>

        <div class="card-links">
          @if (gitLink) {
            <a [href]="gitLink" target="_blank" rel="noopener noreferrer" class="git-link">
              <img src="assets/images/icon/github.svg" alt="GitHub">
              View Repository
            </a>
          }
          @if (browserLink) {
            <a [href]="browserLink" target="_blank" rel="noopener noreferrer" class="browser-link">
              <img src="assets/images/icon/external-link.svg" alt="Visit">
              Visit Project
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./venture-card.component.css']
})
export class VenturesCardComponent {
  @Input() imageUrl = '';
  @Input() title = '';
  @Input() likes = 0;
  @Input() comments = 0;
  @Input() description = '';
  @Input() gitLink = '';
  @Input() browserLink = '';
}
