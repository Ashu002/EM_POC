import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {EventsListComponent} from './events/events-list.component';
import {EventListResolverService} from './events/event-list-resolver.service';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.components';
import {NavbarComponent} from './nav/nav-bar.component';
import {EventsAppComponent} from './events-app.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';

@NgModule({
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
         EventThumbnailComponent, 
         NavbarComponent, 
         EventDetailsComponent,
         CreateEventComponent,
         Error404Component
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
        EventListResolverService
    ]
})
export class AppModule{
    
}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty){
        return window.confirm("You have not save! Do you really want to cancel")
    }
    return false;
}