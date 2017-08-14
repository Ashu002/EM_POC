import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';

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
    constructor(private authService: AuthService){

    }
    
}