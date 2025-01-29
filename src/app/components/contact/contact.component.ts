import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { init, send } from '@emailjs/browser';
import { TranslocoModule } from '@jsverse/transloco';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule, ToastrModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);

  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    init(environment.emailjs.publicKey);
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  async onSubmit() {
    if (this.contactForm.invalid) {
      this.toastr.error('Por favor, rellena todos los campos requeridos', 'Formulario incompleto', {
        timeOut: 3000,
        progressBar: true,
        closeButton: true
      });
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;  // Detener la ejecución si el formulario es inválido
    }
      this.isSubmitting = true;
      try {
        await send(environment.emailjs.serviceId,
          environment.emailjs.templateId,
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          },
          environment.emailjs.publicKey);
          this.toastr.success('¡Gracias por tu mensaje! Te responderé lo antes posible.', '¡Mensaje enviado!', {
            timeOut: 2000,
            progressBar: true,
            closeButton: true
          });
        this.contactForm.reset();
      } catch (error) {
        this.toastr.error('Por favor, inténtalo de nuevo más tarde.', 'Error al enviar', {
          timeOut: 2000
        });
        console.error(error);
      } finally {
        this.isSubmitting = false;
      }
    
  }
  get formStatus() {
    return {
      valid: this.contactForm.valid,
      touched: this.contactForm.touched,
      errors: this.contactForm.errors,
    };
  }
}
