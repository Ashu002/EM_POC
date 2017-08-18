import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    //EventRouteActivator,
    EventService,
    CreateSessionCompnent,
    SessionListComponent,
    UpvoteComponent,
    DurationPipe,
    VotersService,
    LocationValidator,
    EventListResolverService,
    EventResolverService
} from './events/index'
import {Error404Component} from './errors/404.components';
import {NavbarComponent} from './nav/nav-bar.component';
import {EventsAppComponent} from './events-app.component';
import {CollapsibleWellComponent, SipmleModalComponent, ModalTriggerDirective, TOASTER_TOKEN, JQ_TOKEN} from './common/index';
import {appRoutes} from './routes';

import {AuthService} from './user/auth.service'

declare let toastr: any;
declare let jQuery: any;

@NgModule({
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
         EventThumbnailComponent, 
         NavbarComponent, 
         EventDetailsComponent,
         CreateEventComponent,
         Error404Component,
         CreateSessionCompnent,
        SessionListComponent,
        CollapsibleWellComponent,
         DurationPipe,
         SipmleModalComponent,
         ModalTriggerDirective,
         UpvoteComponent,
         LocationValidator
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        //ToastrService,
        {
            provide: TOASTER_TOKEN,
            useValue: toastr
        }, // This means when we using TOASTER_TOKEN to inject dependency, we will get instance of toastr (really Awesome)
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        //EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolverService, 
        EventResolverService,
        AuthService,
        VotersService
    ]
})
export class AppModule{
    
}

function checkDirtyState(component: CreateEventComponent){
    // if(component.isDirty){
    //     return window.confirm("You have not save! Do you really want to cancel")
    // }
    return true;
}