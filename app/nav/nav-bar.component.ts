import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/shared/event.model'
import {EventService} from '../events/shared/event.service'

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
    searchTerm: string = ""
    foundSession: ISession[]
    constructor(private authService: AuthService, private eventService: EventService){

    }
    
    searchSessions(searchTerm){
        console.log(searchTerm);
        this.eventService.searchSessions(searchTerm).subscribe(session => 
            {
                this.foundSession=session;
                console.log(this.foundSession)
            });
    }
}