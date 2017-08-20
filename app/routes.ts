
import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.components';
import {
    CreateEventComponent,
    CreateSessionCompnent,
    EventDetailsComponent,
    // EventRouteActivator,
    EventListResolverService,
    EventResolverService,
    EventsListComponent,
} from './events/index';
import {UserModule} from './user/user.module';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/session/new', component: CreateSessionCompnent},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {
        path: 'events/:id', 
        component: EventDetailsComponent, 
        resolve: {event: EventResolverService}
    },// canActivate: [EventRouteActivator]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: '404', component: Error404Component} ,
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
];
