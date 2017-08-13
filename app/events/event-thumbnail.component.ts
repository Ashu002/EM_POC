import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'event-thumbnail', 
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>
      Time: {{event.time}}
    </div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event?.location?.address}}</span>
    </div>
    <div>
      Online URL: {{event.onlineUrl}}
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()"> Click Me</button>
  </div>`
})

export class EventThumbnailComponent {
    @Input()
    event: any;

    @Output()
    eventClick = new EventEmitter()
    handleClickMe(){
        console.log('Clicked!!'); 
        this.eventClick.emit('Foo');
    }
}