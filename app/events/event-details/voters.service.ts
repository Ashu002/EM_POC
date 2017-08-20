import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ISession} from '../shared/event.model';

@Injectable()
export class VotersService {

    constructor(private http: Http) {
        
    }

    public addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        // Now server code for add vote using http service of angular
        const header = new Headers({'content-Type': 'application/json'});
        const option = new RequestOptions({headers: header});
        const url: string = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        // We do not need to send data in body as all data wil be in url only
        this.http.post(url, JSON.stringify({}), option)
         // in update, we do not need any type of data so we can just subscribe our request here
         .catch(this.handleError).subscribe();
    }
    public deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter((voter) => voter !== voterName);
        const url: string = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).catch(this.handleError).subscribe(); // in case fo delete we can call subscribe here
    }

    public userHasVoted(session: ISession, voterName: string) {
        return session.voters.some((voter) => {
            return voter === voterName;
        });
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
