import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { NewsletterComponent } from './index';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NewsletterComponent],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
