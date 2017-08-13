import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'event-thumbnail', 
    template: `
    <div class="well hoverwell thumbnail">
    <h2 class="my-text-color">{{event.name}}</h2>
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
  </div>`,
  styles: [
      `.my-text-color{color:green}
      `
  ]
})

export class EventThumbnailComponent {
    @Input()
    event: any;

    @Output()
    eventClick = new EventEmitter()
    someValue: any = "Some Value: "
    handleClickMe(){
        console.log('Clicked!!'); 
        this.eventClick.emit('Foo');
    }

    clickMeFun(){
        console.log("Called using Template Reference Variable");
        this.someValue = "Some Value Changed";
    }
}