import { Routes } from '@angular/router';
import { AutheenticationComponent } from './autheentication/autheentication.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth-page',
        pathMatch: 'full'
    },
    {
        path: 'auth-page', component: AutheenticationComponent
    }
];
