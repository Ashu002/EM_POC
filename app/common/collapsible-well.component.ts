import {Component} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: 'app/common/collapsible-well.component.html',
})
export class CollapsibleWellComponent {

    public visiblity: boolean = false;

    public toggleContent() {
        this.visiblity = !this.visiblity;
    }
}
