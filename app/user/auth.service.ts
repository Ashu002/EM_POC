import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
    public currentUSer: IUser;

    constructor(private http: Http) {

    }
    public loginUser(userName: string, password: string) {
        // this.currentUSer = {
        //     id: 1,
        //     firstName: 'Raj',
        //     lastName: 'Ojha',
        //     userName: userName
        // }

        // Now wtih server authentication
        const header = new Headers({'content-Type': 'application/json'});
        const option = new RequestOptions({headers: header});
        const loginInfo = {username: userName, password};

        return this.http.post('/api/login', JSON.stringify(loginInfo), option)
        .do((res) => {
            if(res) {
                this.currentUSer = res.json().user as IUser;
            }
        }).catch((error) => {
            return Observable.of(false);
        });
    }   

    public updateCurrentUser(firstName: string, lastName: string) {
        this.currentUSer.firstName = firstName;
        this.currentUSer.lastName = lastName;

        // Updating user profile to the server
        const header = new Headers({'content-Type': 'application/json'});
        const option = new RequestOptions({headers: header});

        return this.http.put(`/api/users/${this.currentUSer.id}`, JSON.stringify(this.currentUSer), option);

    }
    public isAuthenticated(): boolean {
        return !!this.currentUSer;
    }

    public checkAuthenticationstatus() {
        // This method will check if the user currently login or not

        return this.http.get('/api/currentIdentity').map((response: any )=> {
            if(response._body) {
                return response.json();
            } else {
                return {};
            }
        }).do((currenUser) => {
            if(!! currenUser) {
                this.currentUSer = currenUser;
            }
        } ).subscribe(); 

    }

    public logout() {
        this.currentUSer = undefined;    
        const header = new Headers({'content-Type': 'application/json'});
        const option = new RequestOptions({headers: header});
        return this.http.post('/api/logout', JSON.stringify({}), option);
    }
}
