import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {UserProfileComponent} from './user-profile.component';

export const userRoutes: Routes  = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'login', component: LoginComponent},
];
