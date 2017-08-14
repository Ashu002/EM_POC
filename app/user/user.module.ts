import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {UserProfileComponent} from './user-profile.component';
import {userRoutes} from './userRoutes'
import {LoginComponent} from './login.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserProfileComponent, LoginComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class UserModule{

}