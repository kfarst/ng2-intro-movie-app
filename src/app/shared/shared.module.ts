import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class SharedModule { }
