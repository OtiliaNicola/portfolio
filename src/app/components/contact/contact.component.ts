import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { init, send } from '@emailjs/browser';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  text: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'mail.svg',
      text: 'otilianicola94@gmail.com',
      link: 'mailto:otilianicola94@gmail.com'
    },
    {
      icon: 'map.svg',
      text: 'Madrid, España'
    },
    {
      icon: 'git.svg',
      text: 'GitHub',
      link: 'https://github.com/otilianicola'
    },
    {
      icon: 'linkdin.svg',
      text: 'Linkedin',
      link: 'https://linkedin.com/in/otilianicola'
    },
    {
      icon: 'x.svg',
      text: 'X',
      link: 'https://x.com/OtiliaNicola'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      try {
        await send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          },
          'YOUR_PUBLIC_KEY'
        );
        
        this.toastr.success('Mensaje enviado correctamente!');
        this.contactForm.reset();
      } catch (error) {
        this.toastr.error('Error al enviar el mensaje.');
        console.error(error);
      }
    }
  }
}