import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { DifferencesSectionComponent } from "../../shared/components/differences-section/differences-section.component";
import { ServicesSectionComponent } from "../../shared/components/services-section/services-section.component";
import { GallerySectionComponent } from "../../shared/components/gallery-section/gallery-section.component";
import { CTASectionComponent } from "../../shared/components/ctasection/ctasection.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, HeroSectionComponent, DifferencesSectionComponent, ServicesSectionComponent, GallerySectionComponent, CTASectionComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

}
