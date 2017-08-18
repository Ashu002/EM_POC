import {Injectable} from '@angular/core';
import {IUser} from './user.model'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class AuthService{
    currentUSer: IUser

    constructor(private http: Http){

    }
    loginUser(userName: string, password: string){
        console.log('we are heere')
        // this.currentUSer = {
        //     id: 1,
        //     firstName: 'Raj',
        //     lastName: 'Ojha',
        //     userName: userName
        // }
        console.log(this.currentUSer)

        // Now wtih server authentication
        let header = new Headers({'content-Type': 'application/json'})
        let option = new RequestOptions({headers: header})
        let loginInfo = {username: userName, password: password}

        return this.http.post('/api/login', JSON.stringify(loginInfo), option)
        .do(res => {
            if(res){
                this.currentUSer = <IUser>res.json().user
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }   

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUSer.firstName = firstName;
        this.currentUSer.lastName = lastName;

        // Updating user profile to the server
        let header = new Headers({'content-Type': 'application/json'})
        let option = new RequestOptions({headers: header})

        return this.http.put(`/api/users/${this.currentUSer.id}`, JSON.stringify(this.currentUSer), option)

    }
    isAuthenticated() : boolean {
        return !!this.currentUSer
    }

    checkAuthenticationstatus(){
        //This method will check if the user currently login or not

        return this.http.get('/api/currentIdentity').map((response: any )=> {
            if(response._body)
                return response.json()
            else
                return {}
        }).do(currenUser => {
            if(!! currenUser){
                this.currentUSer = currenUser
            }
        } ).subscribe() 

    }

    logout(){
        console.log('we are in auth sevice logout method')
        this.currentUSer = undefined;    
        let header = new Headers({'content-Type': 'application/json'})
        let option = new RequestOptions({headers: header})
        return this.http.post('/api/logout', JSON.stringify({}), option)
    }
}