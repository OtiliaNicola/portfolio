import { Component } from '@angular/core';

@Component({
  selector: 'app-venture-card',
  imports: [],
  templateUrl: './venture-card.component.html',
  styleUrl: './venture-card.component.scss'
})
export class VentureCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() likes: string = '';
  @Input() comments: string = '';
  @Input() description: string = '';
  @Input() gitLink: string = '';
  @Input() browserLink: string = '';
}
