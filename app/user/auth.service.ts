import {Injectable} from '@angular/core';
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUSer: IUser
    loginUser(userName: string, password: string){
        this.currentUSer = {
            id: 1, 
            firstName: 'Raj',
            lastName: 'Oja',
            userName: userName
        }
    }   
    isAuthenticated() : boolean {
        return !!this.currentUSer
    }
}