import {Component, Input, Output, EventEmitter} from '@angular/core';
import{IEvent} from './shared/event.model'

@Component({
    selector: 'event-thumbnail', 
    template: `
    <div class="well hoverwell thumbnail">
    <h2 class="my-text-color"><a [routerLink] = "['/events', event?.id]">{{event?.name |uppercase}}</a></h2>
    <div>Date: {{event?.date | date:'shortDate'}}</div>
    <div [ngStyle] = "{color:'red'}"[ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early Start) </span>
        <span *ngSwitchCase="'10:00 am'"> (Late Start) </span>
        <span *ngSwitchDefault> (Normal Start) </span>
    </div>
    <div>Price: {{event?.price | currency:'USD':true}}</div>
    <div>
      <span>Location: {{event?.location?.address}}</span>
    </div>
    <div>
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>`
})

export class EventThumbnailComponent {
    @Input()
    event: IEvent;
}