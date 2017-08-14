import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
@Component({
    //selector: 'event-list', // not need now as we will be rendering using the route
    templateUrl: 'app/events/events-list.component.html',

})

export class EventsListComponent implements OnInit{
    events : any[]
    constructor(private eventService: EventService, private toastr: ToastrService){
        
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName, "Raj");
    }

    ngOnInit(){ // we can also define this method without implementation of OnInt interface but this is a standard
        this.events = this.eventService.getEvent()
    }
}