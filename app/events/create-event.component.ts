import {Component} from '@angular/core';
import {Router} from '@angular/router';
import{EventService} from './shared/event.service'
import {IEvent} from './shared/event.model'

@Component({
    templateUrl: '/app/events/create-event.component.html',
    styles: [`
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent{

    isDirty: boolean = true;
    event : IEvent;
    constructor(private router: Router, private eventService: EventService){

    }

    ngOnInit(){
        this.event =  {
            id: 1,
            name: 'Angular Connect',
            date: '9/26/2036',
            time: '10:00 am',
            price: 599.99,
            imageUrl: '/app/assets/images/angularconnect-shield.png',
            location: {
              address: '1057 DT',
              city: 'London',
              country: 'England'
            },
            sessions: []
        }
    }

    saveEvent(formValues){
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events'])
    }
    cancel(){
        this.router.navigate(['/events'])
    }
}