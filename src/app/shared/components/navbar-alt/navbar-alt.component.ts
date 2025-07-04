import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar-alt',
    imports: [RouterModule],
    templateUrl: './navbar-alt.component.html',
    styleUrl: './navbar-alt.component.scss'
})

export class NavbarAltComponent {
    public menuAberto = false;
    
    public toggleMenu(): void {
        this.menuAberto = !this.menuAberto;
    }
}
