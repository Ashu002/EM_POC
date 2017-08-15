import {Injectable} from '@angular/core'
import {ISession} from '../shared/event.model'

@Injectable()
export class VotersService{

    addVoter(session: ISession, voterName: string){
        session.voters.push(voterName)
    }
    deleteVoter(session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName)
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
}