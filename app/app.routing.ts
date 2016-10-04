import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent

    },

    {
        path: 'dashboard',
        component: DashboardComponent

    },

    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);