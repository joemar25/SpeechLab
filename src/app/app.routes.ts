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
import { SelectModuleComponent } from './features/teacher-layout/teacher-speech-lab/select-module/select-module.component';
import { TextToSpeechComponent } from './features/text-to-speech/text-to-speech.component';
import { SpeechLabComponent } from './features/student-layout/speech-lab/speech-lab.component';
import { DashboardTeacherComponent } from './features/teacher-layout/dashboard-teacher/dashboard-teacher.component';
import { ManageClassLayoutComponent } from './features/teacher-layout/manage-class-layout/manage-class-layout.component';
import { ManageClassDashboardComponent } from './features/teacher-layout/manage-class-layout/manage-class-dashboard/manage-class-dashboard.component';
import { ManageClassStreamComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-stream.component';
import { ManageClassGradesComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/manage-class-grades.component';
import { ManageClassStudentsComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-students/manage-class-students.component';
import { ManageClassClassworkComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-classwork/manage-class-classwork.component';
import { ASpeechlabComponent } from './features/admin-layout/a-speechlab/a-speechlab.component';
import { QuizComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/quiz/quiz.component';
import { AttendanceComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/attendance/attendance.component';
import { TasksComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/tasks/tasks.component';
import { QuizResultComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/quiz/quiz-result/quiz-result.component';
import { QuizDashboardComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/quiz/quiz-dashboard/quiz-dashboard.component';
import { TaskDashboardComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/tasks/task-dashboard/task-dashboard.component';
import { TaskResultComponent } from './features/teacher-layout/manage-class-layout/manage-class-stream/manage-class-grades/tasks/task-result/task-result.component';
import { ManageCoursePreviewComponent } from './features/teacher-layout/manage-course/manage-course-preview/manage-course-preview.component';
import { AdvancedComponent } from './features/teacher-layout/manage-course/manage-courses-layout/advanced/advanced.component';
import { AllCoursesComponent } from './features/teacher-layout/manage-course/manage-courses-layout/all-courses/all-courses.component';
import { BeginnerComponent } from './features/teacher-layout/manage-course/manage-courses-layout/beginner/beginner.component';
import { IntermediateComponent } from './features/teacher-layout/manage-course/manage-courses-layout/intermediate/intermediate.component';
import { ManageCoursesLayoutComponent } from './features/teacher-layout/manage-course/manage-courses-layout/manage-courses-layout.component';
import { CoursePreviewComponent } from './features/teacher-layout/manage-course/manage-course-preview/course-preview/course-preview.component';
import { ManageCourseComponent } from './features/teacher-layout/manage-course/manage-course.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AutheenticationComponent,
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
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
      {
        path: 'class-lab/self-assesment/assesment-category',
        component: AssesmentCategoryComponent,
      },
      { path: 'speechlab', component: SpeechLabComponent },
    ],
  },
  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    children: [
      { path: 'speechlab', component: TeacherSpeechLabComponent },
      { path: 't-dashboard', component: TDashboardComponent },
      { path: 'teacher-selection', component: TeacherSelectionComponent },
      { path: 'teacher-auto', component: TeacherAutoComponent },
      { path: 'teacher-manual', component: TeacherManualComponent },
      { path: 'seat-arrangement', component: SeatArrangementComponent },
      { path: 'manual-dashboard', component: ManualDashboardComponent },
      { path: 'select-module', component: SelectModuleComponent },
      { path: 'new-dashboard', component: DashboardTeacherComponent },
      {
        path: 'manage-class',
        component: ManageClassLayoutComponent,
        children: [
          { path: '', component: ManageClassDashboardComponent },
          {
            path: 'manage-class-stream',
            component: ManageClassStreamComponent, //under this path is, class-work, class-students, class-grades
            children: [
              { path: 'manage-class-classwork', component: ManageClassClassworkComponent },
              { path: 'manage-class-students', component: ManageClassStudentsComponent },
              { path: 'manage-class-grades',
                component: ManageClassGradesComponent, //under this path is, quiz, tasks, attendance
                children: [
                  { pathMatch: 'full', path: '', redirectTo: 'quiz' },
                  { path: 'quiz', component: QuizComponent, //under this path is, quiz-dashboard, quiz-result
                    children: [
                      { pathMatch: 'full', path: '', redirectTo: 'quiz-dashboard' },
                      { path: 'quiz-dashboard', component: QuizDashboardComponent },
                      { path: 'quiz-result/:id', component: QuizResultComponent },
                    ],
                   },
                  { path: 'tasks', component: TasksComponent, //under this path is, task-dashboard, task-result
                    children: [
                      { pathMatch: 'full', path: '', redirectTo: 'task-dashboard' },
                      { path: 'task-dashboard', component: TaskDashboardComponent },
                      { path: 'task-result/:id', component: TaskResultComponent },
                    ]
                   },
                  { path: 'attendance', component: AttendanceComponent },
                ],
              },
            ],
          },
        ],
      },
      { path: 'manage-courses', component: ManageCourseComponent,
        children: [
          { path: '', component: ManageCoursesLayoutComponent,
            children: [
              { pathMatch: 'full', path: '', redirectTo: 'all-courses' },
              { path: 'all-courses', component: AllCoursesComponent },
              { path: 'advanced', component: AdvancedComponent },
              { path: 'beginner', component: BeginnerComponent },
              { path: 'intermediate', component: IntermediateComponent },
            ],
           },
           { path: 'course-preview', component: ManageCoursePreviewComponent,
            children: [
              { pathMatch: 'full', path: '', redirectTo: 'course/:id' },
              { path: 'course/:id', component: CoursePreviewComponent },
            ]
           },
           { pathMatch: 'full', path: '', redirectTo: 'all-courses' },
        ]
      },
    ],
  },
  {
    path: 'dictionary',
    component: HomeLayoutComponent,
    children: [{ path: 'd-search', component: DictionaryComponent }],
  },
  {
    path: 'text-to-speech',
    component: HomeLayoutComponent,
    children: [{ path: 'text-record', component: TextToSpeechComponent }],
  },
  {
    path: 'speech-analyzer',
    component: HomeLayoutComponent,
    children: [
      { path: 'record-speech', component: RecordSpeechComponent },
      { path: 'record-list', component: RecordListComponent },
      { path: 'record-report', component: RecordReportComponent },
    ],
  },
  {
    path: 'meet',
    component: TeacherLayoutComponent,
    children: [
      { path: 'video-conference', component: VideoConferenceComponent },
    ],
  },
  
  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent, // or another component for admin layout
    children: [
      { path: 'class-lab/teacher-led', component: TeacherLedComponent },
      { path: 'class-lab/self-assesment', component: SelfAssesmentComponent },
      {
        path: 'class-lab/self-assesment/assesment-category',
        component: AssesmentCategoryComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ADashboardComponent },
      { path: 'manage-users', component: ADashboardComponent },
      { path: 'count', component: CourseComponent },
      { path: 'speech-lab', component: ASpeechlabComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
