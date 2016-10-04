import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/body/dashboard.template.html',
    styleUrls: [ 'app/templates/styles/dashboard.style.css' ]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link)
    }
}