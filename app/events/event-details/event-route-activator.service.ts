import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot){
         const eventExist = !!this.eventService.getEventById(+route.params['id']) // '!!' sign converts the result into the boolean
         if(!eventExist){
            this.router.navigate(['404'])
         }
         return eventExist;
    }
}