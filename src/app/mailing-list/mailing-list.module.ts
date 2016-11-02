import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailingListComponent } from './mailing-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MailingListComponent],
  exports: [MailingListComponent]
})
export class MailingListModule { }
