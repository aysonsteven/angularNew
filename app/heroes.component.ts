import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'heroes-app',
    templateUrl: 'templates/body/heroes.template.html',
    styleUrls: [ 'templates/styles/app.style.css' ],
    providers: [ HeroService ]
})

export class HeroesComponent implements OnInit{


    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroSRV: HeroService, private router: Router){
    }

    getHeroes(): void {
        this.heroSRV.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}