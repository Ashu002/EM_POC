import {Component} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: 'app/common/collapsible-well.component.html'
})
export class CollapsibleWellComponent{

    visiblity:boolean = false

    toggleContent(){
        //alert('ggg');
        this.visiblity = !this.visiblity;
    }
}