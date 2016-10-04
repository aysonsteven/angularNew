import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/body/app.template.html',
    styleUrls: [ 'app/templates/styles/app-nav.style.css' ]
})

export class AppComponent{
    title:string = 'Tour of Heroes';
}