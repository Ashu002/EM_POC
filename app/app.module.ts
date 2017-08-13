import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/nav-bar.component';
import {EventsAppComponent} from './events-app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule{
    
}