import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AutheenticationComponent } from './features/auth/login-layout/autheentication.component';
import { ClassLabComponent } from './features/student-layout/class-lab/class-lab.component';
import { DashboardComponent } from './features/student-layout/dashboard/dashboard.component';
import { StudentLayoutComponent } from './features/student-layout/student-layout.component';
import { UserProfileComponent } from './features/student-layout/user/user-profile.component';
import { TeacherLedComponent } from './features/student-layout/class-lab/teacher-led/teacher-led.component';
import { SelfAssesmentComponent } from './features/student-layout/class-lab/self-assesment/self-assesment.component';
import { AssesmentCategoryComponent } from './features/student-layout/class-lab/self-assesment/assesment-category/assesment-category.component';
import { VideoConferenceComponent } from './features/student-layout/meet/video-conference.component';
import { TeacherSpeechLabComponent } from './features/teacher-layout/teacher-speech-lab/teacher-speech-lab.component';
import { TeacherLayoutComponent } from './features/teacher-layout/teacher-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login', component: AutheenticationComponent,
    },
    {
        path: 'student', component: StudentLayoutComponent,
        children: [
            { path: '', redirectTo: 'student/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent},
            { path: 'class-lab', component: ClassLabComponent },
            { path: 'profile', component: UserProfileComponent },
            { path: 'meet', component: VideoConferenceComponent },
            {path:'class-lab/teacher-led',component: TeacherLedComponent},
            {path:'class-lab/self-assesment',component: SelfAssesmentComponent},
            {path:'class-lab/self-assesment/assesment-category',component: AssesmentCategoryComponent},
        ]
    },
    {
        path: 'teacher', component: TeacherLayoutComponent,
        children: [
            { path: 'speechlab',component: TeacherSpeechLabComponent},
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
