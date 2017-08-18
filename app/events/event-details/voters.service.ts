import {Injectable} from '@angular/core'
import {ISession} from '../shared/event.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class VotersService{

    constructor(private http :Http){
        
    }

    addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName)

        // Now server code for add vote using http service of angular
        let header = new Headers({'content-Type': 'application/json'})
        let option = new RequestOptions({headers: header})
        let url:string = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, JSON.stringify({}), option)// We do not need to send data in body as all data wil be in url only
        .catch(this.handleError).subscribe() // in update, we do not need any type of data so we can just subscribe our request here
    }
    deleteVoter(eventId: number, session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName)
        let url:string = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url).catch(this.handleError).subscribe() // in case fo delete we can call subscribe here
    }

    userHasVoted(session: ISession, voterName: string){
        console.log(session)
        console.log(voterName)
         return session.voters.some(voter =>
         {
            console.log(voter === voterName)
            return voter === voterName
        })
    }

    private handleError(error: Response){
        console.log("Error is voters service: ", error)
        return Observable.throw(error.statusText);
    }
}