
import {Component, OnInit} from '@angular/core'; // This is comming from the systemjs config file
import {AuthService} from './user/auth.service';

@Component({
    selector: 'event-app',
    template: '<nav-bar></nav-bar><router-outlet></router-outlet>',
})
export class EventsAppComponent implements OnInit {
        
    constructor(private authService: AuthService) {

    }
    public ngOnInit() {
        this.authService.checkAuthenticationstatus();
        
    }
}
