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
import { VideoConferenceComponent } from './features/meet/video-conference/video-conference.component';
import { TeacherSpeechLabComponent } from './features/teacher-layout/teacher-speech-lab/teacher-speech-lab.component';
import { TeacherLayoutComponent } from './features/teacher-layout/teacher-layout.component';
import { TaskDetailComponent } from './features/student-layout/task/task-detail/task-detail.component';
import { TeacherSelectionComponent } from './features/teacher-layout/teacher-selection/teacher-selection.component';
import { TeacherAutoComponent } from './features/teacher-layout/teacher-auto/teacher-auto.component';
import { TeacherManualComponent } from './features/teacher-layout/teacher-manual/teacher-manual.component';
import { SeatArrangementComponent } from './features/teacher-layout/seat-arrangement/seat-arrangement.component';
import { ManualDashboardComponent } from './features/teacher-layout/manual-dashboard/manual-dashboard.component';

import { SpeechAnalyzerComponent } from './features/speech-analyzer/speech-analyzer.component';
import { RecordSpeechComponent } from './features/speech-analyzer/record-speech/record-speech.component';
import { RecordListComponent } from './features/speech-analyzer/record-list/record-list.component';
import { RecordReportComponent } from './features/speech-analyzer/record-report/record-report.component';
import { MeetLayoutComponent } from './features/meet/meet-layout.component';
import { HomeLayoutComponent } from './shared/components/home-layout/home-layout.component';
import { DictionaryComponent } from './features/dictionary/dictionary.component';
import { CourseComponent } from './features/course/course.component';
import { TaskComponent } from './features/student-layout/task/task.component';
import { LessonComponent } from './features/course/lesson/lesson.component';
import { TDashboardComponent } from './features/teacher-layout/t-dashboard/t-dashboard.component';
import { ADashboardComponent } from './features/admin-layout/a-dashboard/a-dashboard.component';
import { AdminLayoutComponent } from './features/admin-layout/admin-layout.component';
import { ManageClassLayoutComponent } from './features/teacher-layout/manage-class-layout/manage-class-layout.component';
import { ManageCoursesLayoutComponent } from './features/teacher-layout/manage-courses-layout/manage-courses-layout.component';
import { AllCoursesComponent } from './features/teacher-layout/manage-courses-layout/all-courses/all-courses.component';
import { BeginnerComponent } from './features/teacher-layout/manage-courses-layout/beginner/beginner.component';
import { IntermediateComponent } from './features/teacher-layout/manage-courses-layout/intermediate/intermediate.component';
import { AdvancedComponent } from './features/teacher-layout/manage-courses-layout/advanced/advanced.component';
import { SelectModuleComponent } from './features/teacher-layout/teacher-speech-lab/select-module/select-module.component';
import { ClassAssignmentComponent } from './features/teacher-layout/manage-class-layout/class-assignment/class-assignment.component';
import { InstructionComponent } from './features/teacher-layout/manage-class-layout/class-assignment/instruction/instruction.component';
import { StudentWorkComponent } from './features/teacher-layout/manage-class-layout/class-assignment/student-work/student-work.component';
import { AttendanceComponent } from './features/teacher-layout/manage-class-layout/manage/attendance/attendance.component';
import { ClassworkComponent } from './features/teacher-layout/manage-class-layout/manage/classwork/classwork/classwork.component';
import { GradesComponent } from './features/teacher-layout/manage-class-layout/manage/grades/grades/grades.component';
import { PeopleComponent } from './features/teacher-layout/manage-class-layout/manage/people/people/people.component';

import { ManageComponent } from './features/teacher-layout/manage-class-layout/manage/manage.component';
import { ClassDetailComponent } from './features/teacher-layout/manage-class-layout/stream/class-detail/class-detail.component';
import { ClassListComponent } from './features/teacher-layout/manage-class-layout/stream/class-list/class-list.component';
import { ManageClassComponent } from './features/teacher-layout/manage-class-layout/stream/manage-class/manage-class.component';
import { StreamComponent } from './features/teacher-layout/manage-class-layout/stream/stream.component';



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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'class-lab', component: ClassLabComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'task', component: TaskComponent },
      { path: 'course-details', component: CourseComponent },
      { path: 'task/task-detail', component: TaskDetailComponent },
      { path: 'class-lab/teacher-led', component: TeacherLedComponent },
      { path: 'class-lab/self-assesment', component: SelfAssesmentComponent },
      { path: 'class-lab/self-assesment/assesment-category', component: AssesmentCategoryComponent },
    ]
  },
  {
    path: 'teacher', component: TeacherLayoutComponent,
    children: [
      { path: 'speechlab', component: TeacherSpeechLabComponent },
      { path: 't-dashboard', component: TDashboardComponent },
      { path: 'teacher-selection', component: TeacherSelectionComponent },
      { path: 'teacher-auto', component: TeacherAutoComponent },
      { path: 'teacher-manual', component: TeacherManualComponent },
      { path: 'seat-arrangement', component: SeatArrangementComponent },
      { path: 'manual-dashboard', component: ManualDashboardComponent },
      { path: 'select-module', component: SelectModuleComponent },
      {
        path: 'manage-class', component: ManageClassLayoutComponent,
        children: [
          {
            path: 'manage', component: ManageComponent,
            children: [
              { path: 'classwork', component: ClassworkComponent },
              { path: 'people', component: PeopleComponent },
              { path: 'grades', component: GradesComponent },
              { path: 'attendance', component: AttendanceComponent },
            ]
          },
          {
            path: 'stream', component: StreamComponent,
            children: [
              { path: '', component: ManageClassComponent },
              { path: 'class-list/:id', component: ClassListComponent },
              { path: 'class-detail/:id', component: ClassDetailComponent },
            ]
          },
          {
            path: 'class-assignment/:id', component: ClassAssignmentComponent,
            children: [
              { path: 'instructions', component: InstructionComponent },
              { path: 'student-work', component: StudentWorkComponent },
            ]
          },
          { path: '', redirectTo: 'stream', pathMatch: 'full' },
        ]
      },
      {
        path: 'manage-courses', component: ManageCoursesLayoutComponent,
        children: [
          { path: '', redirectTo: 'all-courses', pathMatch: 'full' },
          { path: 'all-courses', component: AllCoursesComponent },
          { path: 'beginner', component: BeginnerComponent },
          { path: 'intermediate', component: IntermediateComponent },
          { path: 'advanced', component: AdvancedComponent },
        ]
      }
    ]
  },
  {
    path: 'dictionary', component: HomeLayoutComponent,
    children: [
      { path: 'd-search', component: DictionaryComponent },
    ]
  },
  {
    path: 'speech-analyzer', component: SpeechAnalyzerComponent,
    children: [
      { path: 'record-speech', component: RecordSpeechComponent },
      { path: 'record-list', component: RecordListComponent },
      { path: 'record-report', component: RecordReportComponent },
    ]
  },
  {
    path: 'meet', component: TeacherLayoutComponent,
    children: [
      { path: 'video-conference', component: VideoConferenceComponent },
    ]
  },
  // Admin routes
  {
    path: 'admin', component: AdminLayoutComponent, // or another component for admin layout
    children: [
      { path: '', redirectTo: 'student/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'class-lab', component: ClassLabComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'task', component: TaskComponent },
      { path: 'course-details', component: CourseComponent },
      { path: 'lesson-details', component: LessonComponent },
      { path: 'task/task-detail', component: TaskDetailComponent },
      { path: 'class-lab/teacher-led', component: TeacherLedComponent },
      { path: 'class-lab/self-assesment', component: SelfAssesmentComponent },
      { path: 'class-lab/self-assesment/assesment-category', component: AssesmentCategoryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ADashboardComponent },
      { path: 'manage-users', component: ADashboardComponent },
      { path: 'count', component: CourseComponent },
      { path: 'speech-lab', component: TeacherLayoutComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
