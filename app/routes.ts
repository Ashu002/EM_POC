
import {Routes} from '@angular/router';

import {
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
} from './events/index'
import {Error404Component} from './errors/404.components';
import {EventListResolverService} from './events/event-list-resolver.service';

export const appRoutes :Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: '404', component: Error404Component} ,
]