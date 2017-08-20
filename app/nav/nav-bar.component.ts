import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';
import {AuthService} from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html', 
    styles: [
        `li>a.active{
            color: palevioletred;
          }`,
    ],
})

export class NavbarComponent {
    public searchTerm: string = '';
    public foundSession: ISession[];
    constructor(private authService: AuthService, private eventService: EventService, private router: Router) {

    }
    
    public searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((session) => {
                this.foundSession=session;
            });
    }
    
    public logout() {
        this.authService.logout().subscribe(()=> {
            this.router.navigate(['/user/login']);
        });
    }
}
