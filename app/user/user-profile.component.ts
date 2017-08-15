import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {TOASTER_TOKEN} from '../common/toastr.service'
@Component({
    templateUrl: 'app/user/user-profile.component.html',
    styles: [`
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class UserProfileComponent implements OnInit{
    profileForm: FormGroup // This property need to bind in HTML with FormGroup directive
    firstName: FormControl
    lastName: FormControl
    constructor(private authService: AuthService, 
                private router:Router,
                @Inject(TOASTER_TOKEN) private toastr){

    }

    ngOnInit(){
        /* This line is for single validator on same field */
        //this.firstName = new FormControl(this.authService.currentUSer.firstName, Validators.required) // Validators passed as the 2nd paramater of the FormControl
        
        /* This line is for Multiple validator on same field */
        this.firstName = new FormControl(this.authService.currentUSer.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]) // Second argument will be array here
        this.lastName = new FormControl(this.authService.currentUSer.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    updateProfile(formValues){
        console.log(formValues);
        if(this.profileForm.valid){
            console.log('hello')
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile Saved');
            this.router.navigate(['/events']);
        }
    }

    cancel(){
        this.router.navigate(['/events']);
    }

    validateLastName(){
       return (this.lastName.valid || this.lastName.untouched)
    }

    validateFirstName(){
        return (this.firstName.valid || this.firstName.untouched)
     }
}