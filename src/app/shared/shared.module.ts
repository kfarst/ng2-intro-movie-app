import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent, NavbarComponent } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [ToolbarComponent, NavbarComponent]
})
export class SharedModule { }
