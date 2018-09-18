import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, NosotrosComponent, ServiciosComponent, ContactoComponent],
  exports: [HomeComponent, NosotrosComponent, ServiciosComponent, ContactoComponent]
})
export class NavigationModule { 
  
}
