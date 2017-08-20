import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [
        `.modeal-body{height:250px; overflow-y: scroll;}
        `,
    ],
})

export class SipmleModalComponent {

    @Input()
    public title: string;
   @Input()
   public elementId: string;
    @ViewChild('modalContainer')
    public containerEl: ElementRef;
    // There is another option @ViewChildren which basicallly used when we have refered more than one 
    // element with same ref
    // ...most cases for *ngFor
    constructor(@Inject(JQ_TOKEN) private $) {

    }
    public closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}
