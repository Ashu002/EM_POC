import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './shared/event.service';

@Injectable()
export class EventListResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {

    }
    // if we are calling using resolver then we not need to subscribe as resovler does same for us
    public resolve() { 
        return this.eventService.getEvent().map((events) => events);
    }
} 
