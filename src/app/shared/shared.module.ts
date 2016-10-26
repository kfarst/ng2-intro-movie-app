import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarComponent, NavbarComponent, FavoritesService } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent],
  providers: [FavoritesService],
  exports: [ToolbarComponent, NavbarComponent]
})
export class SharedModule { }
