
import {Component} from '@angular/core'; // This is comming from the systemjs config file

@Component({
    selector: 'event-app',
    template: '<nav-bar></nav-bar><router-outlet></router-outlet>'
})
export class EventsAppComponent{

}