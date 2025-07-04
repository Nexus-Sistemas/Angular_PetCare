import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { GaleriaPageComponent } from './pages/galeria-page/galeria-page.component';
import { DifferencesSectionComponent } from './shared/components/differences-section/differences-section.component';
import { DifferencesPageComponent } from './pages/differences-page/differences-page.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'inicio', 
        pathMatch: 'full' 
    },
    {
        path: 'inicio',
        component: HomePageComponent
    },
    {
        path: 'servicos',
        component: ServicesPageComponent
    },
    {
        path: 'galeria',
        component: GaleriaPageComponent
    },
    {
        path: 'diferenciais',
        component: DifferencesPageComponent
    }
];
