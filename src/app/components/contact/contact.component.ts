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
  template: `
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-12">
          <div class="blur"></div>
          <span class="pills">Contact</span>
          <div class="line"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            @for (info of contactInfo; track info.text) {
              <div class="info-item">
                <img [src]="'assets/images/icon/' + info.icon" [alt]="info.text">
                @if (info.link) {
                  <a [href]="info.link">{{info.text}}</a>
                } @else {
                  <span>{{info.text}}</span>
                }
              </div>
            }
          </div>
        </div>

        <div class="col-md-6">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-group">
              <input type="text" formControlName="name" placeholder="Your Name" 
                     [class.is-invalid]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
              @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                <div class="invalid-feedback">Name is required</div>
              }
            </div>

            <div class="form-group">
              <input type="email" formControlName="email" placeholder="Your Email"
                     [class.is-invalid]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                <div class="invalid-feedback">Please enter a valid email</div>
              }
            </div>

            <div class="form-group">
              <input type="text" formControlName="subject" placeholder="Subject"
                     [class.is-invalid]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
              @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                <div class="invalid-feedback">Subject is required</div>
              }
            </div>

            <div class="form-group">
              <textarea formControlName="message" placeholder="Your Message" rows="5"
                       [class.is-invalid]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
              </textarea>
              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                <div class="invalid-feedback">Message is required</div>
              }
            </div>

            <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
              @if (isSubmitting) {
                <span>Sending...</span>
              } @else {
                <span>Send Message</span>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'phone.svg',
      text: '+34 654 40 10 65',
      link: 'tel:+34654401065'
    },
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
      text: 'github.com/otilianicola',
      link: 'https://github.com/otilianicola'
    },
    {
      icon: 'linkdin.svg',
      text: 'linkedin.com/in/otilianicola',
      link: 'https://linkedin.com/in/otilianicola'
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
        
        this.toastr.success('Message sent successfully!');
        this.contactForm.reset();
      } catch (error) {
        this.toastr.error('Error sending message');
        console.error(error);
      }
    }
  }
}