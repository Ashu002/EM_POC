import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {UserProfileComponent} from './user-profile.component';
import {userRoutes} from './userRoutes'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserProfileComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class UserModule{

}