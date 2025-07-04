import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [RouterModule, CommonModule ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
    public menuAberto = false;
    
    public toggleMenu(): void {
        this.menuAberto = !this.menuAberto;
    }
}