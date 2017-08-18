import {Component} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
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
       // this.event = this.eventService.getEventById(+this.route.snapshot.params['id']); // '+' sign indicate that this is anumber not string 

       // This code is for routing in the same component 
       this.route.params.forEach((params: Params) =>{
           //### When using local data
           //this.event = this.eventService.getEventById(+params['id'])
           //this.addMode = false;

           // ## Now using http API
        //    this.eventService.getEventById(+params['id']).subscribe((event: IEvent) => {
        //        this.event = event;
        //        this.addMode = false
        //    })

        this.event = this.route.snapshot.data['event']
        this.addMode = false;
       })
    }
    addSession(){
        this.addMode=true;
    }

    saveNewSession(newSession: ISession){
        const nexId = Math.max.apply(null, this.event.sessions.map(s=>s.id))
        newSession.id = nexId + 1
        this.event.sessions.push(newSession)
        //this.eventService.updateEvent(this.event)
        this.eventService.saveEvent(this.event).subscribe()
        this.addMode = false
    }

    cancelCreateSession(cancelFlag){
        if(cancelFlag){
            this.addMode = false
        }
    }
}