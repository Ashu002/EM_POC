import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {UserProfileComponent} from './user-profile.component';
import {userRoutes} from './userRoutes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
    ],
    declarations: [
        UserProfileComponent, LoginComponent,
    ],
    exports: [

    ],
    providers: [

    ],
})
export class UserModule {

}
