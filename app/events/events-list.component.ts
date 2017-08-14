import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './shared/event.model'
@Component({
    //selector: 'event-list', // not need now as we will be rendering using the route
    templateUrl: 'app/events/events-list.component.html',

})

export class EventsListComponent implements OnInit{
    events : IEvent[]
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){
        
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName, "Raj");
    }

    ngOnInit(){ // we can also define this method without implementation of OnInt interface but this is a standard
     //this.eventService.getEvent().subscribe(events => {this.events = events})

     this.events = this.route.snapshot.data['events'] // parameter passes within data arry should be same name as in routes definition of resolve
    }
}