import {Component, Input, OnChanges} from '@angular/core'
import {ISession} from '../shared/event.model'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input()
    sessions: ISession[]
    @Input()
    filterBy: string
    @Input()
    sortBy: string

    visibleSessions: ISession[]
    ngOnChanges(){
        this.visibleSessions = this.sessions.slice(0);
        this.sortBy === 'name' ?  this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
    }
}

function sortByNameAsc(s1: ISession, s2:ISession){
    if(s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2:ISession){
    return s2.voters.length - s1.voters.length
}