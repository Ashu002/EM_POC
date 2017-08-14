import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html', 
    styles: [
        `li>a.active{
            color: palevioletred;
          }`
    ]
})

export class NavbarComponent{

}