import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared/event.service';

@Component({
    templateUrl: '/app/events/create-event.component.html',
    styles: [`
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `],
})

export class CreateEventComponent {

    public isDirty: boolean = true;
    
    constructor(private router: Router, private eventService: EventService) {

    }
    public saveEvent(formValues) {
        
        this.eventService.saveEvent(formValues).subscribe((event) => {
            this.router.navigate(['/events']);
            this.isDirty = false;
        });
        
    }
    public cancel() {
        this.router.navigate(['/events']);
    }
}
