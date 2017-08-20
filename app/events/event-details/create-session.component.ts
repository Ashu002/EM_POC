import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ISession} from '../shared/event.model';
@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `],
})

export class CreateSessionCompnent implements OnInit {
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;
    public newSessionForm: FormGroup;
    @Output()
    public saveNewSession = new EventEmitter();
     @Output()
    public cancelCreateSession = new EventEmitter();
    public ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    public saveSession(formValues) {
        // console.log(formValues);
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: [],
        };
        // Save logic will be here
        this.saveNewSession.emit(session);
    }

    public cancel() {
        this.cancelCreateSession.emit(true);
    }
}
