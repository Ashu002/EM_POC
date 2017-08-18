import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/shared/event.model'
import {EventService} from '../events/shared/event.service'
import {Router} from '@angular/router'

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
    constructor(private authService: AuthService, private eventService: EventService, private router: Router){

    }
    
    searchSessions(searchTerm){
        console.log(searchTerm);
        this.eventService.searchSessions(searchTerm).subscribe(session => 
            {
                this.foundSession=session;
                console.log(this.foundSession)
            });
    }
    
    logout(){
        console.log('we are here');
        this.authService.logout().subscribe(()=>{
            console.log(' now we are in subscribe method of logout in nav-bar.component')
            this.router.navigate(['/user/login'])
        })
    }
}