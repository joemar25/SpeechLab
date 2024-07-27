import { RouterModule, Routes } from '@angular/router';
import { AutheenticationComponent } from './autheentication/autheentication.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { DashboardComponent } from './student-layout/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ClassLabComponent } from './student-layout/class-lab/class-lab.component';

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
