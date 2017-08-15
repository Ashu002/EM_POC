import {Injectable} from '@angular/core';
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUSer: IUser
    loginUser(userName: string, password: string){
        console.log('we are heere')
        this.currentUSer = {
            id: 1,
            firstName: 'Raj',
            lastName: 'Ojha',
            userName: userName
        }
        console.log(this.currentUSer)
    }   

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUSer.firstName = firstName;
        this.currentUSer.lastName = lastName;
    }
    isAuthenticated() : boolean {
        return !!this.currentUSer
    }
}