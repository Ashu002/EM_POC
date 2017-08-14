import {Injectable} from '@angular/core';
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUSer: IUser
    loginUser(userName: string, password: string){
        this.currentUSer = {
            id: 1, 
            firstName: 'Raj',
            lastName: 'Ojha',
            userName: userName
        }
    }   

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUSer.firstName = firstName;
        this.currentUSer.lastName = lastName;
    }
    isAuthenticated() : boolean {
        return !!this.currentUSer
    }
}