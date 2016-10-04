import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HeroService } from './services/hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/body/hero-detail.template.html',
    styleUrls: [ 'app/templates/styles/hero-detail.style.css' ]
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    constructor(private heroSRV: HeroService, private route: ActivatedRoute, private loc: Location, private router: Router){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroSRV.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void{
        this.loc.back();
    }
    gotoDetail(): void{
        this.router.navigate(['/detail', this.hero.id]);
    }


}