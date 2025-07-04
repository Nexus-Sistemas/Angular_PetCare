import { Component } from '@angular/core';
import { NavbarAltComponent } from "../../shared/components/navbar-alt/navbar-alt.component";
import { GallerySectionComponent } from "../../shared/components/gallery-section/gallery-section.component";

@Component({
  selector: 'app-galeria-page',
  imports: [NavbarAltComponent, GallerySectionComponent],
  templateUrl: './galeria-page.component.html',
  styleUrl: './galeria-page.component.scss'
})
export class GaleriaPageComponent {

}
