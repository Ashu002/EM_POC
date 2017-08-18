import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router}  from '@angular/router'
@Component({
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent{

    loginInvalid: boolean = false

    constructor(private authService: AuthService, private router:Router){

    }

    login(formValues){
        console.log(formValues);        
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(res => {
            if(!res){
                this.loginInvalid = true
            }else{
                this.router.navigate(['/events'])
            }
        });
        
     }   

     cancel(){
         this.router.navigate(['/events'])
     }
}