import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailValidatorDirective } from './index';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(8)]],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, EmailValidatorDirective.validate()]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }
}
