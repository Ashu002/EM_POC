import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventService,
    CreateSessionCompnent
} from './events/index'
import {EventListResolverService} from './events/event-list-resolver.service';
import {Error404Component} from './errors/404.components';
import {NavbarComponent} from './nav/nav-bar.component';
import {EventsAppComponent} from './events-app.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';

import {AuthService} from './user/auth.service'

@NgModule({
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
         EventThumbnailComponent, 
         NavbarComponent, 
         EventDetailsComponent,
         CreateEventComponent,
         Error404Component,
         CreateSessionCompnent
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolverService, 
        AuthService
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