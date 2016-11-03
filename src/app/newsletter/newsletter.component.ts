import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidatorDirective } from './index';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [Validators.required, EmailValidatorDirective.validate()]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required)
      })
    });
  }
}
