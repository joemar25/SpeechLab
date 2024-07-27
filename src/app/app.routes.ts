import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AutheenticationComponent } from './features/auth/autheentication.component';
import { ClassLabComponent } from './features/student-layout/class-lab/class-lab.component';
import { DashboardComponent } from './features/student-layout/dashboard/dashboard.component';
import { StudentLayoutComponent } from './features/student-layout/student-layout.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth-page',
        pathMatch: 'full'
    },
    {
        path: 'auth-page', component: AutheenticationComponent,
    },
    {
        path: 'student', component: StudentLayoutComponent,
        children: [
            { path: '', redirectTo: 'student/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent},
            { path: 'class-lab', component: ClassLabComponent },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
