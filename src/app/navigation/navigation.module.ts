import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, NosotrosComponent],
  exports: [HomeComponent, NosotrosComponent]
})
export class NavigationModule { }
