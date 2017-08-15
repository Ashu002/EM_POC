import {Component} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
     a {cursor:pointer}
  `]
})

export class EventDetailsComponent{
    event: IEvent
    addMode: boolean = false
    filterBy: string = 'All'
    sortBy: string = 'votes'
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }
    ngOnInit(){
        this.event = this.eventService.getEventById(+this.route.snapshot.params['id']); // '+' sign indicate that this is anumber not string 
    }
    addSession(){
        this.addMode=true;
    }

    saveNewSession(newSession: ISession){
        const nexId = Math.max.apply(null, this.event.sessions.map(s=>s.id))
        newSession.id = nexId + 1
        this.event.sessions.push(newSession)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelCreateSession(cancelFlag){
        if(cancelFlag){
            this.addMode = false
        }
    }
}