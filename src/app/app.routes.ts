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
import { TaskListComponent } from './features/student-layout/task/task-list/task-list.component';
import { TaskDetailComponent } from './features/student-layout/task/task-detail/task-detail.component';
import { TaskLayoutComponent } from './features/student-layout/task/task-layout/task-layout.component';
import { TeacherSelectionComponent } from './features/teacher-layout/teacher-selection/teacher-selection.component';
import { TeacherAutoComponent } from './features/teacher-layout/teacher-auto/teacher-auto.component';
import { TeacherManualComponent } from './features/teacher-layout/teacher-manual/teacher-manual.component';
import { SeatArrangementComponent } from './features/teacher-layout/seat-arrangement/seat-arrangement.component';
import { ManualDashboardComponent } from './features/teacher-layout/manual-dashboard/manual-dashboard.component';

import { SpeechAnalyzerComponent } from './features/speech-analyzer/speech-analyzer.component';
import { RecordSpeechComponent } from './features/speech-analyzer/record-speech/record-speech.component';
import { RecordListComponent } from './features/speech-analyzer/record-list/record-list.component';
import { RecordReportComponent } from './features/speech-analyzer/record-report/record-report.component';


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
            { path: 'task', component: TaskLayoutComponent},
            { path: 'task/task-detail', component: TaskDetailComponent},
            { path: 'task/task-list', component: TaskListComponent},
            {path:'class-lab/teacher-led',component: TeacherLedComponent},
            {path:'class-lab/self-assesment',component: SelfAssesmentComponent},
            {path:'class-lab/self-assesment/assesment-category',component: AssesmentCategoryComponent},
        ]
    },
    {
        path: 'teacher', component: TeacherLayoutComponent,
        children: [
            { path: 'speechlab',component: TeacherSpeechLabComponent},
            { path: 'teacher-selection', component: TeacherSelectionComponent },
            { path: 'teacher-auto', component: TeacherAutoComponent },
            { path: 'teacher-manual', component: TeacherManualComponent },
            { path: 'seat-arrangement', component: SeatArrangementComponent },
            { path: 'manual-dashboard', component: ManualDashboardComponent },
        ]
    },
    {
        path: 'speech-analyzer', component: SpeechAnalyzerComponent,
        children: [
            { path: 'record-speech',component: RecordSpeechComponent},
            { path: 'record-list',component: RecordListComponent},
            { path: 'record-report',component: RecordReportComponent},
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
