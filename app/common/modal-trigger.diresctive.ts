import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
    selector: '[modal-trigger]', // wrapping in square bracket means, this is an attributes not elements
})

export class ModalTriggerDirective implements OnInit {
    public el: HTMLElement;
    @Input('modal-trigger')
    public modalId: string;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }
    public ngOnInit() {
        this.el.addEventListener('click',(e) => {
            this.$(`#${this.modalId}`).modal({});
    });
        
    } 
}
